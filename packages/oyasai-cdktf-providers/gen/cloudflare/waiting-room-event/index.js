// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event cloudflare_waiting_room_event}
*/
export class WaitingRoomEvent extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_waiting_room_event";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_event", importId: importFromId, provider });
    }
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
        this._customPageHtml = config.customPageHtml;
        this._description = config.description;
        this._disableSessionRenewal = config.disableSessionRenewal;
        this._eventEndTime = config.eventEndTime;
        this._eventStartTime = config.eventStartTime;
        this._name = config.name;
        this._newUsersPerMinute = config.newUsersPerMinute;
        this._prequeueStartTime = config.prequeueStartTime;
        this._queueingMethod = config.queueingMethod;
        this._sessionDuration = config.sessionDuration;
        this._shuffleAtEventStart = config.shuffleAtEventStart;
        this._suspended = config.suspended;
        this._totalActiveUsers = config.totalActiveUsers;
        this._turnstileAction = config.turnstileAction;
        this._turnstileMode = config.turnstileMode;
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
    // custom_page_html - computed: false, optional: true, required: false
    _customPageHtml;
    get customPageHtml() {
        return this.getStringAttribute('custom_page_html');
    }
    set customPageHtml(value) {
        this._customPageHtml = value;
    }
    resetCustomPageHtml() {
        this._customPageHtml = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customPageHtmlInput() {
        return this._customPageHtml;
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // disable_session_renewal - computed: false, optional: true, required: false
    _disableSessionRenewal;
    get disableSessionRenewal() {
        return this.getBooleanAttribute('disable_session_renewal');
    }
    set disableSessionRenewal(value) {
        this._disableSessionRenewal = value;
    }
    resetDisableSessionRenewal() {
        this._disableSessionRenewal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableSessionRenewalInput() {
        return this._disableSessionRenewal;
    }
    // event_end_time - computed: false, optional: false, required: true
    _eventEndTime;
    get eventEndTime() {
        return this.getStringAttribute('event_end_time');
    }
    set eventEndTime(value) {
        this._eventEndTime = value;
    }
    // Temporarily expose input value. Use with caution.
    get eventEndTimeInput() {
        return this._eventEndTime;
    }
    // event_start_time - computed: false, optional: false, required: true
    _eventStartTime;
    get eventStartTime() {
        return this.getStringAttribute('event_start_time');
    }
    set eventStartTime(value) {
        this._eventStartTime = value;
    }
    // Temporarily expose input value. Use with caution.
    get eventStartTimeInput() {
        return this._eventStartTime;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // new_users_per_minute - computed: false, optional: true, required: false
    _newUsersPerMinute;
    get newUsersPerMinute() {
        return this.getNumberAttribute('new_users_per_minute');
    }
    set newUsersPerMinute(value) {
        this._newUsersPerMinute = value;
    }
    resetNewUsersPerMinute() {
        this._newUsersPerMinute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newUsersPerMinuteInput() {
        return this._newUsersPerMinute;
    }
    // prequeue_start_time - computed: false, optional: true, required: false
    _prequeueStartTime;
    get prequeueStartTime() {
        return this.getStringAttribute('prequeue_start_time');
    }
    set prequeueStartTime(value) {
        this._prequeueStartTime = value;
    }
    resetPrequeueStartTime() {
        this._prequeueStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prequeueStartTimeInput() {
        return this._prequeueStartTime;
    }
    // queueing_method - computed: false, optional: true, required: false
    _queueingMethod;
    get queueingMethod() {
        return this.getStringAttribute('queueing_method');
    }
    set queueingMethod(value) {
        this._queueingMethod = value;
    }
    resetQueueingMethod() {
        this._queueingMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queueingMethodInput() {
        return this._queueingMethod;
    }
    // session_duration - computed: false, optional: true, required: false
    _sessionDuration;
    get sessionDuration() {
        return this.getNumberAttribute('session_duration');
    }
    set sessionDuration(value) {
        this._sessionDuration = value;
    }
    resetSessionDuration() {
        this._sessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionDurationInput() {
        return this._sessionDuration;
    }
    // shuffle_at_event_start - computed: true, optional: true, required: false
    _shuffleAtEventStart;
    get shuffleAtEventStart() {
        return this.getBooleanAttribute('shuffle_at_event_start');
    }
    set shuffleAtEventStart(value) {
        this._shuffleAtEventStart = value;
    }
    resetShuffleAtEventStart() {
        this._shuffleAtEventStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shuffleAtEventStartInput() {
        return this._shuffleAtEventStart;
    }
    // suspended - computed: true, optional: true, required: false
    _suspended;
    get suspended() {
        return this.getBooleanAttribute('suspended');
    }
    set suspended(value) {
        this._suspended = value;
    }
    resetSuspended() {
        this._suspended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get suspendedInput() {
        return this._suspended;
    }
    // total_active_users - computed: false, optional: true, required: false
    _totalActiveUsers;
    get totalActiveUsers() {
        return this.getNumberAttribute('total_active_users');
    }
    set totalActiveUsers(value) {
        this._totalActiveUsers = value;
    }
    resetTotalActiveUsers() {
        this._totalActiveUsers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get totalActiveUsersInput() {
        return this._totalActiveUsers;
    }
    // turnstile_action - computed: false, optional: true, required: false
    _turnstileAction;
    get turnstileAction() {
        return this.getStringAttribute('turnstile_action');
    }
    set turnstileAction(value) {
        this._turnstileAction = value;
    }
    resetTurnstileAction() {
        this._turnstileAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get turnstileActionInput() {
        return this._turnstileAction;
    }
    // turnstile_mode - computed: false, optional: true, required: false
    _turnstileMode;
    get turnstileMode() {
        return this.getStringAttribute('turnstile_mode');
    }
    set turnstileMode(value) {
        this._turnstileMode = value;
    }
    resetTurnstileMode() {
        this._turnstileMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get turnstileModeInput() {
        return this._turnstileMode;
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
