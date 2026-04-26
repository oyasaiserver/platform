// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function waitingRoomAdditionalRoutesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        path: cdktf.stringToTerraform(struct.path),
    };
}
export function waitingRoomAdditionalRoutesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WaitingRoomAdditionalRoutesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
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
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._path = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._path = value.path;
        }
    }
    // host - computed: true, optional: true, required: false
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // path - computed: true, optional: true, required: false
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
}
export class WaitingRoomAdditionalRoutesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
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
        return new WaitingRoomAdditionalRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function waitingRoomCookieAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        samesite: cdktf.stringToTerraform(struct.samesite),
        secure: cdktf.stringToTerraform(struct.secure),
    };
}
export function waitingRoomCookieAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        samesite: {
            value: cdktf.stringToHclTerraform(struct.samesite),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secure: {
            value: cdktf.stringToHclTerraform(struct.secure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WaitingRoomCookieAttributesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._samesite !== undefined) {
            hasAnyValues = true;
            internalValueResult.samesite = this._samesite;
        }
        if (this._secure !== undefined) {
            hasAnyValues = true;
            internalValueResult.secure = this._secure;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._samesite = undefined;
            this._secure = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._samesite = value.samesite;
            this._secure = value.secure;
        }
    }
    // samesite - computed: true, optional: true, required: false
    _samesite;
    get samesite() {
        return this.getStringAttribute('samesite');
    }
    set samesite(value) {
        this._samesite = value;
    }
    resetSamesite() {
        this._samesite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samesiteInput() {
        return this._samesite;
    }
    // secure - computed: true, optional: true, required: false
    _secure;
    get secure() {
        return this.getStringAttribute('secure');
    }
    set secure(value) {
        this._secure = value;
    }
    resetSecure() {
        this._secure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secureInput() {
        return this._secure;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room cloudflare_waiting_room}
*/
export class WaitingRoom extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_waiting_room";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WaitingRoom to import
    * @param importFromId The id of the existing WaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WaitingRoom to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room cloudflare_waiting_room} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WaitingRoomConfig
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
        this._additionalRoutes.internalValue = config.additionalRoutes;
        this._cookieAttributes.internalValue = config.cookieAttributes;
        this._cookieSuffix = config.cookieSuffix;
        this._customPageHtml = config.customPageHtml;
        this._defaultTemplateLanguage = config.defaultTemplateLanguage;
        this._description = config.description;
        this._disableSessionRenewal = config.disableSessionRenewal;
        this._enabledOriginCommands = config.enabledOriginCommands;
        this._host = config.host;
        this._jsonResponseEnabled = config.jsonResponseEnabled;
        this._name = config.name;
        this._newUsersPerMinute = config.newUsersPerMinute;
        this._path = config.path;
        this._queueAll = config.queueAll;
        this._queueingMethod = config.queueingMethod;
        this._queueingStatusCode = config.queueingStatusCode;
        this._sessionDuration = config.sessionDuration;
        this._suspended = config.suspended;
        this._totalActiveUsers = config.totalActiveUsers;
        this._turnstileAction = config.turnstileAction;
        this._turnstileMode = config.turnstileMode;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // additional_routes - computed: true, optional: true, required: false
    _additionalRoutes = new WaitingRoomAdditionalRoutesList(this, "additional_routes", false);
    get additionalRoutes() {
        return this._additionalRoutes;
    }
    putAdditionalRoutes(value) {
        this._additionalRoutes.internalValue = value;
    }
    resetAdditionalRoutes() {
        this._additionalRoutes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get additionalRoutesInput() {
        return this._additionalRoutes.internalValue;
    }
    // cookie_attributes - computed: true, optional: true, required: false
    _cookieAttributes = new WaitingRoomCookieAttributesOutputReference(this, "cookie_attributes");
    get cookieAttributes() {
        return this._cookieAttributes;
    }
    putCookieAttributes(value) {
        this._cookieAttributes.internalValue = value;
    }
    resetCookieAttributes() {
        this._cookieAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cookieAttributesInput() {
        return this._cookieAttributes.internalValue;
    }
    // cookie_suffix - computed: true, optional: true, required: false
    _cookieSuffix;
    get cookieSuffix() {
        return this.getStringAttribute('cookie_suffix');
    }
    set cookieSuffix(value) {
        this._cookieSuffix = value;
    }
    resetCookieSuffix() {
        this._cookieSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cookieSuffixInput() {
        return this._cookieSuffix;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // custom_page_html - computed: true, optional: true, required: false
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
    // default_template_language - computed: true, optional: true, required: false
    _defaultTemplateLanguage;
    get defaultTemplateLanguage() {
        return this.getStringAttribute('default_template_language');
    }
    set defaultTemplateLanguage(value) {
        this._defaultTemplateLanguage = value;
    }
    resetDefaultTemplateLanguage() {
        this._defaultTemplateLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultTemplateLanguageInput() {
        return this._defaultTemplateLanguage;
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
    // disable_session_renewal - computed: true, optional: true, required: false
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
    // enabled_origin_commands - computed: true, optional: true, required: false
    _enabledOriginCommands;
    get enabledOriginCommands() {
        return this.getListAttribute('enabled_origin_commands');
    }
    set enabledOriginCommands(value) {
        this._enabledOriginCommands = value;
    }
    resetEnabledOriginCommands() {
        this._enabledOriginCommands = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledOriginCommandsInput() {
        return this._enabledOriginCommands;
    }
    // host - computed: false, optional: false, required: true
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // json_response_enabled - computed: true, optional: true, required: false
    _jsonResponseEnabled;
    get jsonResponseEnabled() {
        return this.getBooleanAttribute('json_response_enabled');
    }
    set jsonResponseEnabled(value) {
        this._jsonResponseEnabled = value;
    }
    resetJsonResponseEnabled() {
        this._jsonResponseEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jsonResponseEnabledInput() {
        return this._jsonResponseEnabled;
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
    // new_users_per_minute - computed: false, optional: false, required: true
    _newUsersPerMinute;
    get newUsersPerMinute() {
        return this.getNumberAttribute('new_users_per_minute');
    }
    set newUsersPerMinute(value) {
        this._newUsersPerMinute = value;
    }
    // Temporarily expose input value. Use with caution.
    get newUsersPerMinuteInput() {
        return this._newUsersPerMinute;
    }
    // next_event_prequeue_start_time - computed: true, optional: false, required: false
    get nextEventPrequeueStartTime() {
        return this.getStringAttribute('next_event_prequeue_start_time');
    }
    // next_event_start_time - computed: true, optional: false, required: false
    get nextEventStartTime() {
        return this.getStringAttribute('next_event_start_time');
    }
    // path - computed: true, optional: true, required: false
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // queue_all - computed: true, optional: true, required: false
    _queueAll;
    get queueAll() {
        return this.getBooleanAttribute('queue_all');
    }
    set queueAll(value) {
        this._queueAll = value;
    }
    resetQueueAll() {
        this._queueAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queueAllInput() {
        return this._queueAll;
    }
    // queueing_method - computed: true, optional: true, required: false
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
    // queueing_status_code - computed: true, optional: true, required: false
    _queueingStatusCode;
    get queueingStatusCode() {
        return this.getNumberAttribute('queueing_status_code');
    }
    set queueingStatusCode(value) {
        this._queueingStatusCode = value;
    }
    resetQueueingStatusCode() {
        this._queueingStatusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queueingStatusCodeInput() {
        return this._queueingStatusCode;
    }
    // session_duration - computed: true, optional: true, required: false
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
    // total_active_users - computed: false, optional: false, required: true
    _totalActiveUsers;
    get totalActiveUsers() {
        return this.getNumberAttribute('total_active_users');
    }
    set totalActiveUsers(value) {
        this._totalActiveUsers = value;
    }
    // Temporarily expose input value. Use with caution.
    get totalActiveUsersInput() {
        return this._totalActiveUsers;
    }
    // turnstile_action - computed: true, optional: true, required: false
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
    // turnstile_mode - computed: true, optional: true, required: false
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
            additional_routes: cdktf.listMapper(waitingRoomAdditionalRoutesToTerraform, false)(this._additionalRoutes.internalValue),
            cookie_attributes: waitingRoomCookieAttributesToTerraform(this._cookieAttributes.internalValue),
            cookie_suffix: cdktf.stringToTerraform(this._cookieSuffix),
            custom_page_html: cdktf.stringToTerraform(this._customPageHtml),
            default_template_language: cdktf.stringToTerraform(this._defaultTemplateLanguage),
            description: cdktf.stringToTerraform(this._description),
            disable_session_renewal: cdktf.booleanToTerraform(this._disableSessionRenewal),
            enabled_origin_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledOriginCommands),
            host: cdktf.stringToTerraform(this._host),
            json_response_enabled: cdktf.booleanToTerraform(this._jsonResponseEnabled),
            name: cdktf.stringToTerraform(this._name),
            new_users_per_minute: cdktf.numberToTerraform(this._newUsersPerMinute),
            path: cdktf.stringToTerraform(this._path),
            queue_all: cdktf.booleanToTerraform(this._queueAll),
            queueing_method: cdktf.stringToTerraform(this._queueingMethod),
            queueing_status_code: cdktf.numberToTerraform(this._queueingStatusCode),
            session_duration: cdktf.numberToTerraform(this._sessionDuration),
            suspended: cdktf.booleanToTerraform(this._suspended),
            total_active_users: cdktf.numberToTerraform(this._totalActiveUsers),
            turnstile_action: cdktf.stringToTerraform(this._turnstileAction),
            turnstile_mode: cdktf.stringToTerraform(this._turnstileMode),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            additional_routes: {
                value: cdktf.listMapperHcl(waitingRoomAdditionalRoutesToHclTerraform, false)(this._additionalRoutes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WaitingRoomAdditionalRoutesList",
            },
            cookie_attributes: {
                value: waitingRoomCookieAttributesToHclTerraform(this._cookieAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WaitingRoomCookieAttributes",
            },
            cookie_suffix: {
                value: cdktf.stringToHclTerraform(this._cookieSuffix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_page_html: {
                value: cdktf.stringToHclTerraform(this._customPageHtml),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_template_language: {
                value: cdktf.stringToHclTerraform(this._defaultTemplateLanguage),
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
            enabled_origin_commands: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledOriginCommands),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            json_response_enabled: {
                value: cdktf.booleanToHclTerraform(this._jsonResponseEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            path: {
                value: cdktf.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            queue_all: {
                value: cdktf.booleanToHclTerraform(this._queueAll),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            queueing_method: {
                value: cdktf.stringToHclTerraform(this._queueingMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            queueing_status_code: {
                value: cdktf.numberToHclTerraform(this._queueingStatusCode),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            session_duration: {
                value: cdktf.numberToHclTerraform(this._sessionDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
