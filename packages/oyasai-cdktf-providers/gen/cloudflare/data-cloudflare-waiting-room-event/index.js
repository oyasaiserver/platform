// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event cloudflare_waiting_room_event}
*/
export class DataCloudflareWaitingRoomEvent extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_waiting_room_event";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_event", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._eventId = config.eventId;
        this._waitingRoomId = config.waitingRoomId;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // custom_page_html - computed: true, optional: false, required: false
    get customPageHtml() {
        return this.getStringAttribute('custom_page_html');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // disable_session_renewal - computed: true, optional: false, required: false
    get disableSessionRenewal() {
        return this.getBooleanAttribute('disable_session_renewal');
    }
    // event_end_time - computed: true, optional: false, required: false
    get eventEndTime() {
        return this.getStringAttribute('event_end_time');
    }
    // event_id - computed: false, optional: false, required: true
    _eventId;
    get eventId() {
        return this.getStringAttribute('event_id');
    }
    set eventId(value) {
        this._eventId = value;
    }
    // Temporarily expose input value. Use with caution.
    get eventIdInput() {
        return this._eventId;
    }
    // event_start_time - computed: true, optional: false, required: false
    get eventStartTime() {
        return this.getStringAttribute('event_start_time');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // new_users_per_minute - computed: true, optional: false, required: false
    get newUsersPerMinute() {
        return this.getNumberAttribute('new_users_per_minute');
    }
    // prequeue_start_time - computed: true, optional: false, required: false
    get prequeueStartTime() {
        return this.getStringAttribute('prequeue_start_time');
    }
    // queueing_method - computed: true, optional: false, required: false
    get queueingMethod() {
        return this.getStringAttribute('queueing_method');
    }
    // session_duration - computed: true, optional: false, required: false
    get sessionDuration() {
        return this.getNumberAttribute('session_duration');
    }
    // shuffle_at_event_start - computed: true, optional: false, required: false
    get shuffleAtEventStart() {
        return this.getBooleanAttribute('shuffle_at_event_start');
    }
    // suspended - computed: true, optional: false, required: false
    get suspended() {
        return this.getBooleanAttribute('suspended');
    }
    // total_active_users - computed: true, optional: false, required: false
    get totalActiveUsers() {
        return this.getNumberAttribute('total_active_users');
    }
    // turnstile_action - computed: true, optional: false, required: false
    get turnstileAction() {
        return this.getStringAttribute('turnstile_action');
    }
    // turnstile_mode - computed: true, optional: false, required: false
    get turnstileMode() {
        return this.getStringAttribute('turnstile_mode');
    }
    // waiting_room_id - computed: false, optional: false, required: true
    _waitingRoomId;
    get waitingRoomId() {
        return this.getStringAttribute('waiting_room_id');
    }
    set waitingRoomId(value) {
        this._waitingRoomId = value;
    }
    // Temporarily expose input value. Use with caution.
    get waitingRoomIdInput() {
        return this._waitingRoomId;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            event_id: cdktf.stringToTerraform(this._eventId),
            waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
