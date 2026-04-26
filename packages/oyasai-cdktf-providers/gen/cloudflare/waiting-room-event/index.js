"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event
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
exports.WaitingRoomEvent = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event cloudflare_waiting_room_event}
*/
var WaitingRoomEvent = /** @class */ (function (_super) {
    __extends(WaitingRoomEvent, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event cloudflare_waiting_room_event} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WaitingRoomEventConfig
    */
    function WaitingRoomEvent(scope, id, config) {
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
        _this._customPageHtml = config.customPageHtml;
        _this._description = config.description;
        _this._disableSessionRenewal = config.disableSessionRenewal;
        _this._eventEndTime = config.eventEndTime;
        _this._eventStartTime = config.eventStartTime;
        _this._name = config.name;
        _this._newUsersPerMinute = config.newUsersPerMinute;
        _this._prequeueStartTime = config.prequeueStartTime;
        _this._queueingMethod = config.queueingMethod;
        _this._sessionDuration = config.sessionDuration;
        _this._shuffleAtEventStart = config.shuffleAtEventStart;
        _this._suspended = config.suspended;
        _this._totalActiveUsers = config.totalActiveUsers;
        _this._turnstileAction = config.turnstileAction;
        _this._turnstileMode = config.turnstileMode;
        _this._waitingRoomId = config.waitingRoomId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WaitingRoomEvent resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WaitingRoomEvent to import
    * @param importFromId The id of the existing WaitingRoomEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WaitingRoomEvent to import is found
    */
    WaitingRoomEvent.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_event", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "createdOn", {
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
    Object.defineProperty(WaitingRoomEvent.prototype, "customPageHtml", {
        get: function () {
            return this.getStringAttribute('custom_page_html');
        },
        set: function (value) {
            this._customPageHtml = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetCustomPageHtml = function () {
        this._customPageHtml = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "customPageHtmlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customPageHtml;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "disableSessionRenewal", {
        get: function () {
            return this.getBooleanAttribute('disable_session_renewal');
        },
        set: function (value) {
            this._disableSessionRenewal = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetDisableSessionRenewal = function () {
        this._disableSessionRenewal = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "disableSessionRenewalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableSessionRenewal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "eventEndTime", {
        get: function () {
            return this.getStringAttribute('event_end_time');
        },
        set: function (value) {
            this._eventEndTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "eventEndTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventEndTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "eventStartTime", {
        get: function () {
            return this.getStringAttribute('event_start_time');
        },
        set: function (value) {
            this._eventStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "eventStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "newUsersPerMinute", {
        get: function () {
            return this.getNumberAttribute('new_users_per_minute');
        },
        set: function (value) {
            this._newUsersPerMinute = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetNewUsersPerMinute = function () {
        this._newUsersPerMinute = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "newUsersPerMinuteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newUsersPerMinute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "prequeueStartTime", {
        get: function () {
            return this.getStringAttribute('prequeue_start_time');
        },
        set: function (value) {
            this._prequeueStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetPrequeueStartTime = function () {
        this._prequeueStartTime = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "prequeueStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prequeueStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "queueingMethod", {
        get: function () {
            return this.getStringAttribute('queueing_method');
        },
        set: function (value) {
            this._queueingMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetQueueingMethod = function () {
        this._queueingMethod = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "queueingMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueingMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "sessionDuration", {
        get: function () {
            return this.getNumberAttribute('session_duration');
        },
        set: function (value) {
            this._sessionDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetSessionDuration = function () {
        this._sessionDuration = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "sessionDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "shuffleAtEventStart", {
        get: function () {
            return this.getBooleanAttribute('shuffle_at_event_start');
        },
        set: function (value) {
            this._shuffleAtEventStart = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetShuffleAtEventStart = function () {
        this._shuffleAtEventStart = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "shuffleAtEventStartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shuffleAtEventStart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "suspended", {
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        set: function (value) {
            this._suspended = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetSuspended = function () {
        this._suspended = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "suspendedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suspended;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "totalActiveUsers", {
        get: function () {
            return this.getNumberAttribute('total_active_users');
        },
        set: function (value) {
            this._totalActiveUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetTotalActiveUsers = function () {
        this._totalActiveUsers = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "totalActiveUsersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._totalActiveUsers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "turnstileAction", {
        get: function () {
            return this.getStringAttribute('turnstile_action');
        },
        set: function (value) {
            this._turnstileAction = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetTurnstileAction = function () {
        this._turnstileAction = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "turnstileActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._turnstileAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "turnstileMode", {
        get: function () {
            return this.getStringAttribute('turnstile_mode');
        },
        set: function (value) {
            this._turnstileMode = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetTurnstileMode = function () {
        this._turnstileMode = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "turnstileModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._turnstileMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "waitingRoomId", {
        get: function () {
            return this.getStringAttribute('waiting_room_id');
        },
        set: function (value) {
            this._waitingRoomId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "waitingRoomIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitingRoomId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomEvent.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomEvent.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(WaitingRoomEvent.prototype, "zoneIdInput", {
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
    WaitingRoomEvent.prototype.synthesizeAttributes = function () {
        return {
            custom_page_html: cdktf.stringToTerraform(this._customPageHtml),
            description: cdktf.stringToTerraform(this._description),
            disable_session_renewal: cdktf.booleanToTerraform(this._disableSessionRenewal),
            event_end_time: cdktf.stringToTerraform(this._eventEndTime),
            event_start_time: cdktf.stringToTerraform(this._eventStartTime),
            name: cdktf.stringToTerraform(this._name),
            new_users_per_minute: cdktf.numberToTerraform(this._newUsersPerMinute),
            prequeue_start_time: cdktf.stringToTerraform(this._prequeueStartTime),
            queueing_method: cdktf.stringToTerraform(this._queueingMethod),
            session_duration: cdktf.numberToTerraform(this._sessionDuration),
            shuffle_at_event_start: cdktf.booleanToTerraform(this._shuffleAtEventStart),
            suspended: cdktf.booleanToTerraform(this._suspended),
            total_active_users: cdktf.numberToTerraform(this._totalActiveUsers),
            turnstile_action: cdktf.stringToTerraform(this._turnstileAction),
            turnstile_mode: cdktf.stringToTerraform(this._turnstileMode),
            waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    WaitingRoomEvent.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            custom_page_html: {
                value: cdktf.stringToHclTerraform(this._customPageHtml),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_session_renewal: {
                value: cdktf.booleanToHclTerraform(this._disableSessionRenewal),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            event_end_time: {
                value: cdktf.stringToHclTerraform(this._eventEndTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_start_time: {
                value: cdktf.stringToHclTerraform(this._eventStartTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            new_users_per_minute: {
                value: cdktf.numberToHclTerraform(this._newUsersPerMinute),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            prequeue_start_time: {
                value: cdktf.stringToHclTerraform(this._prequeueStartTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            queueing_method: {
                value: cdktf.stringToHclTerraform(this._queueingMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            session_duration: {
                value: cdktf.numberToHclTerraform(this._sessionDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            shuffle_at_event_start: {
                value: cdktf.booleanToHclTerraform(this._shuffleAtEventStart),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            suspended: {
                value: cdktf.booleanToHclTerraform(this._suspended),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            total_active_users: {
                value: cdktf.numberToHclTerraform(this._totalActiveUsers),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            turnstile_action: {
                value: cdktf.stringToHclTerraform(this._turnstileAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            turnstile_mode: {
                value: cdktf.stringToHclTerraform(this._turnstileMode),
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
    WaitingRoomEvent.tfResourceType = "cloudflare_waiting_room_event";
    return WaitingRoomEvent;
}(cdktf.TerraformResource));
exports.WaitingRoomEvent = WaitingRoomEvent;
