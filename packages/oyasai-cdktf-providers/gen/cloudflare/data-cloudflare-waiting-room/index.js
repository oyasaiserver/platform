// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareWaitingRoomAdditionalRoutesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWaitingRoomAdditionalRoutesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWaitingRoomAdditionalRoutesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
}
export class DataCloudflareWaitingRoomAdditionalRoutesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataCloudflareWaitingRoomAdditionalRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWaitingRoomCookieAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWaitingRoomCookieAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWaitingRoomCookieAttributesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // samesite - computed: true, optional: false, required: false
    get samesite() {
        return this.getStringAttribute('samesite');
    }
    // secure - computed: true, optional: false, required: false
    get secure() {
        return this.getStringAttribute('secure');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room cloudflare_waiting_room}
*/
export class DataCloudflareWaitingRoom extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_waiting_room";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoom resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoom to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoom to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room cloudflare_waiting_room} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_waiting_room',
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
        this._waitingRoomId = config.waitingRoomId;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // additional_routes - computed: true, optional: false, required: false
    _additionalRoutes = new DataCloudflareWaitingRoomAdditionalRoutesList(this, "additional_routes", false);
    get additionalRoutes() {
        return this._additionalRoutes;
    }
    // cookie_attributes - computed: true, optional: false, required: false
    _cookieAttributes = new DataCloudflareWaitingRoomCookieAttributesOutputReference(this, "cookie_attributes");
    get cookieAttributes() {
        return this._cookieAttributes;
    }
    // cookie_suffix - computed: true, optional: false, required: false
    get cookieSuffix() {
        return this.getStringAttribute('cookie_suffix');
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // custom_page_html - computed: true, optional: false, required: false
    get customPageHtml() {
        return this.getStringAttribute('custom_page_html');
    }
    // default_template_language - computed: true, optional: false, required: false
    get defaultTemplateLanguage() {
        return this.getStringAttribute('default_template_language');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // disable_session_renewal - computed: true, optional: false, required: false
    get disableSessionRenewal() {
        return this.getBooleanAttribute('disable_session_renewal');
    }
    // enabled_origin_commands - computed: true, optional: false, required: false
    get enabledOriginCommands() {
        return this.getListAttribute('enabled_origin_commands');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // json_response_enabled - computed: true, optional: false, required: false
    get jsonResponseEnabled() {
        return this.getBooleanAttribute('json_response_enabled');
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
    // next_event_prequeue_start_time - computed: true, optional: false, required: false
    get nextEventPrequeueStartTime() {
        return this.getStringAttribute('next_event_prequeue_start_time');
    }
    // next_event_start_time - computed: true, optional: false, required: false
    get nextEventStartTime() {
        return this.getStringAttribute('next_event_start_time');
    }
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
    // queue_all - computed: true, optional: false, required: false
    get queueAll() {
        return this.getBooleanAttribute('queue_all');
    }
    // queueing_method - computed: true, optional: false, required: false
    get queueingMethod() {
        return this.getStringAttribute('queueing_method');
    }
    // queueing_status_code - computed: true, optional: false, required: false
    get queueingStatusCode() {
        return this.getNumberAttribute('queueing_status_code');
    }
    // session_duration - computed: true, optional: false, required: false
    get sessionDuration() {
        return this.getNumberAttribute('session_duration');
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
            waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
