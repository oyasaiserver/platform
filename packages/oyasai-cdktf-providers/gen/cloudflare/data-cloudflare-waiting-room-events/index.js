"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_events
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
exports.DataCloudflareWaitingRoomEvents = exports.DataCloudflareWaitingRoomEventsResultList = exports.DataCloudflareWaitingRoomEventsResultOutputReference = void 0;
exports.dataCloudflareWaitingRoomEventsResultToTerraform = dataCloudflareWaitingRoomEventsResultToTerraform;
exports.dataCloudflareWaitingRoomEventsResultToHclTerraform = dataCloudflareWaitingRoomEventsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWaitingRoomEventsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWaitingRoomEventsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWaitingRoomEventsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomEventsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWaitingRoomEventsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "customPageHtml", {
        // custom_page_html - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_page_html');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "disableSessionRenewal", {
        // disable_session_renewal - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_session_renewal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "eventEndTime", {
        // event_end_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('event_end_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "eventStartTime", {
        // event_start_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('event_start_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "newUsersPerMinute", {
        // new_users_per_minute - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('new_users_per_minute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "prequeueStartTime", {
        // prequeue_start_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prequeue_start_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "queueingMethod", {
        // queueing_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queueing_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "sessionDuration", {
        // session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "shuffleAtEventStart", {
        // shuffle_at_event_start - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('shuffle_at_event_start');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "suspended", {
        // suspended - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "totalActiveUsers", {
        // total_active_users - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_active_users');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "turnstileAction", {
        // turnstile_action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('turnstile_action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEventsResultOutputReference.prototype, "turnstileMode", {
        // turnstile_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('turnstile_mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWaitingRoomEventsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWaitingRoomEventsResultOutputReference = DataCloudflareWaitingRoomEventsResultOutputReference;
var DataCloudflareWaitingRoomEventsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomEventsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWaitingRoomEventsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWaitingRoomEventsResultList.prototype.get = function (index) {
        return new DataCloudflareWaitingRoomEventsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWaitingRoomEventsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareWaitingRoomEventsResultList = DataCloudflareWaitingRoomEventsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_events cloudflare_waiting_room_events}
*/
var DataCloudflareWaitingRoomEvents = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomEvents, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_events cloudflare_waiting_room_events} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomEventsConfig
    */
    function DataCloudflareWaitingRoomEvents(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_waiting_room_events',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareWaitingRoomEventsResultList(_this, "result", false);
        _this._maxItems = config.maxItems;
        _this._waitingRoomId = config.waitingRoomId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoomEvents resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoomEvents to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoomEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_events#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoomEvents to import is found
    */
    DataCloudflareWaitingRoomEvents.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_events", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWaitingRoomEvents.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWaitingRoomEvents.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareWaitingRoomEvents.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvents.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvents.prototype, "waitingRoomId", {
        get: function () {
            return this.getStringAttribute('waiting_room_id');
        },
        set: function (value) {
            this._waitingRoomId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvents.prototype, "waitingRoomIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitingRoomId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvents.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWaitingRoomEvents.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareWaitingRoomEvents.prototype, "zoneIdInput", {
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
    DataCloudflareWaitingRoomEvents.prototype.synthesizeAttributes = function () {
        return {
            max_items: cdktf.numberToTerraform(this._maxItems),
            waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareWaitingRoomEvents.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareWaitingRoomEvents.tfResourceType = "cloudflare_waiting_room_events";
    return DataCloudflareWaitingRoomEvents;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWaitingRoomEvents = DataCloudflareWaitingRoomEvents;
