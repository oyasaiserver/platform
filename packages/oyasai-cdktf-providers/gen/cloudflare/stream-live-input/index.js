// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function streamLiveInputRecordingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedOrigins),
        hide_live_viewer_count: cdktf.booleanToTerraform(struct.hideLiveViewerCount),
        mode: cdktf.stringToTerraform(struct.mode),
        require_signed_urls: cdktf.booleanToTerraform(struct.requireSignedUrls),
        timeout_seconds: cdktf.numberToTerraform(struct.timeoutSeconds),
    };
}
export function streamLiveInputRecordingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        allowed_origins: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedOrigins),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        hide_live_viewer_count: {
            value: cdktf.booleanToHclTerraform(struct.hideLiveViewerCount),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        require_signed_urls: {
            value: cdktf.booleanToHclTerraform(struct.requireSignedUrls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        timeout_seconds: {
            value: cdktf.numberToHclTerraform(struct.timeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class StreamLiveInputRecordingOutputReference extends cdktf.ComplexObject {
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
        if (this._allowedOrigins !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedOrigins = this._allowedOrigins;
        }
        if (this._hideLiveViewerCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.hideLiveViewerCount = this._hideLiveViewerCount;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._requireSignedUrls !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireSignedUrls = this._requireSignedUrls;
        }
        if (this._timeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutSeconds = this._timeoutSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedOrigins = undefined;
            this._hideLiveViewerCount = undefined;
            this._mode = undefined;
            this._requireSignedUrls = undefined;
            this._timeoutSeconds = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedOrigins = value.allowedOrigins;
            this._hideLiveViewerCount = value.hideLiveViewerCount;
            this._mode = value.mode;
            this._requireSignedUrls = value.requireSignedUrls;
            this._timeoutSeconds = value.timeoutSeconds;
        }
    }
    // allowed_origins - computed: true, optional: true, required: false
    _allowedOrigins;
    get allowedOrigins() {
        return this.getListAttribute('allowed_origins');
    }
    set allowedOrigins(value) {
        this._allowedOrigins = value;
    }
    resetAllowedOrigins() {
        this._allowedOrigins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedOriginsInput() {
        return this._allowedOrigins;
    }
    // hide_live_viewer_count - computed: true, optional: true, required: false
    _hideLiveViewerCount;
    get hideLiveViewerCount() {
        return this.getBooleanAttribute('hide_live_viewer_count');
    }
    set hideLiveViewerCount(value) {
        this._hideLiveViewerCount = value;
    }
    resetHideLiveViewerCount() {
        this._hideLiveViewerCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hideLiveViewerCountInput() {
        return this._hideLiveViewerCount;
    }
    // mode - computed: true, optional: true, required: false
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // require_signed_urls - computed: true, optional: true, required: false
    _requireSignedUrls;
    get requireSignedUrls() {
        return this.getBooleanAttribute('require_signed_urls');
    }
    set requireSignedUrls(value) {
        this._requireSignedUrls = value;
    }
    resetRequireSignedUrls() {
        this._requireSignedUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireSignedUrlsInput() {
        return this._requireSignedUrls;
    }
    // timeout_seconds - computed: true, optional: true, required: false
    _timeoutSeconds;
    get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
    set timeoutSeconds(value) {
        this._timeoutSeconds = value;
    }
    resetTimeoutSeconds() {
        this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutSecondsInput() {
        return this._timeoutSeconds;
    }
}
export function streamLiveInputRtmpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function streamLiveInputRtmpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class StreamLiveInputRtmpsOutputReference extends cdktf.ComplexObject {
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
    // stream_key - computed: true, optional: false, required: false
    get streamKey() {
        return this.getStringAttribute('stream_key');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
export function streamLiveInputRtmpsPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function streamLiveInputRtmpsPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class StreamLiveInputRtmpsPlaybackOutputReference extends cdktf.ComplexObject {
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
    // stream_key - computed: true, optional: false, required: false
    get streamKey() {
        return this.getStringAttribute('stream_key');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
export function streamLiveInputSrtToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function streamLiveInputSrtToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class StreamLiveInputSrtOutputReference extends cdktf.ComplexObject {
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
    // passphrase - computed: true, optional: false, required: false
    get passphrase() {
        return this.getStringAttribute('passphrase');
    }
    // stream_id - computed: true, optional: false, required: false
    get streamId() {
        return this.getStringAttribute('stream_id');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
export function streamLiveInputSrtPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function streamLiveInputSrtPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class StreamLiveInputSrtPlaybackOutputReference extends cdktf.ComplexObject {
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
    // passphrase - computed: true, optional: false, required: false
    get passphrase() {
        return this.getStringAttribute('passphrase');
    }
    // stream_id - computed: true, optional: false, required: false
    get streamId() {
        return this.getStringAttribute('stream_id');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
export function streamLiveInputWebRtcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function streamLiveInputWebRtcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class StreamLiveInputWebRtcOutputReference extends cdktf.ComplexObject {
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
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
export function streamLiveInputWebRtcPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function streamLiveInputWebRtcPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class StreamLiveInputWebRtcPlaybackOutputReference extends cdktf.ComplexObject {
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
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input cloudflare_stream_live_input}
*/
export class StreamLiveInput extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_stream_live_input";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a StreamLiveInput resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamLiveInput to import
    * @param importFromId The id of the existing StreamLiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamLiveInput to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_live_input", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input cloudflare_stream_live_input} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamLiveInputConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_stream_live_input',
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
        this._accountId = config.accountId;
        this._defaultCreator = config.defaultCreator;
        this._deleteRecordingAfterDays = config.deleteRecordingAfterDays;
        this._enabled = config.enabled;
        this._liveInputIdentifier = config.liveInputIdentifier;
        this._meta = config.meta;
        this._recording.internalValue = config.recording;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // default_creator - computed: false, optional: true, required: false
    _defaultCreator;
    get defaultCreator() {
        return this.getStringAttribute('default_creator');
    }
    set defaultCreator(value) {
        this._defaultCreator = value;
    }
    resetDefaultCreator() {
        this._defaultCreator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultCreatorInput() {
        return this._defaultCreator;
    }
    // delete_recording_after_days - computed: false, optional: true, required: false
    _deleteRecordingAfterDays;
    get deleteRecordingAfterDays() {
        return this.getNumberAttribute('delete_recording_after_days');
    }
    set deleteRecordingAfterDays(value) {
        this._deleteRecordingAfterDays = value;
    }
    resetDeleteRecordingAfterDays() {
        this._deleteRecordingAfterDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteRecordingAfterDaysInput() {
        return this._deleteRecordingAfterDays;
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // live_input_identifier - computed: false, optional: true, required: false
    _liveInputIdentifier;
    get liveInputIdentifier() {
        return this.getStringAttribute('live_input_identifier');
    }
    set liveInputIdentifier(value) {
        this._liveInputIdentifier = value;
    }
    resetLiveInputIdentifier() {
        this._liveInputIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get liveInputIdentifierInput() {
        return this._liveInputIdentifier;
    }
    // meta - computed: false, optional: true, required: false
    _meta;
    get meta() {
        return this.getStringAttribute('meta');
    }
    set meta(value) {
        this._meta = value;
    }
    resetMeta() {
        this._meta = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metaInput() {
        return this._meta;
    }
    // modified - computed: true, optional: false, required: false
    get modified() {
        return this.getStringAttribute('modified');
    }
    // recording - computed: true, optional: true, required: false
    _recording = new StreamLiveInputRecordingOutputReference(this, "recording");
    get recording() {
        return this._recording;
    }
    putRecording(value) {
        this._recording.internalValue = value;
    }
    resetRecording() {
        this._recording.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recordingInput() {
        return this._recording.internalValue;
    }
    // rtmps - computed: true, optional: false, required: false
    _rtmps = new StreamLiveInputRtmpsOutputReference(this, "rtmps");
    get rtmps() {
        return this._rtmps;
    }
    // rtmps_playback - computed: true, optional: false, required: false
    _rtmpsPlayback = new StreamLiveInputRtmpsPlaybackOutputReference(this, "rtmps_playback");
    get rtmpsPlayback() {
        return this._rtmpsPlayback;
    }
    // srt - computed: true, optional: false, required: false
    _srt = new StreamLiveInputSrtOutputReference(this, "srt");
    get srt() {
        return this._srt;
    }
    // srt_playback - computed: true, optional: false, required: false
    _srtPlayback = new StreamLiveInputSrtPlaybackOutputReference(this, "srt_playback");
    get srtPlayback() {
        return this._srtPlayback;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // uid - computed: true, optional: false, required: false
    get uid() {
        return this.getStringAttribute('uid');
    }
    // web_rtc - computed: true, optional: false, required: false
    _webRtc = new StreamLiveInputWebRtcOutputReference(this, "web_rtc");
    get webRtc() {
        return this._webRtc;
    }
    // web_rtc_playback - computed: true, optional: false, required: false
    _webRtcPlayback = new StreamLiveInputWebRtcPlaybackOutputReference(this, "web_rtc_playback");
    get webRtcPlayback() {
        return this._webRtcPlayback;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            default_creator: cdktf.stringToTerraform(this._defaultCreator),
            delete_recording_after_days: cdktf.numberToTerraform(this._deleteRecordingAfterDays),
            enabled: cdktf.booleanToTerraform(this._enabled),
            live_input_identifier: cdktf.stringToTerraform(this._liveInputIdentifier),
            meta: cdktf.stringToTerraform(this._meta),
            recording: streamLiveInputRecordingToTerraform(this._recording.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_creator: {
                value: cdktf.stringToHclTerraform(this._defaultCreator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delete_recording_after_days: {
                value: cdktf.numberToHclTerraform(this._deleteRecordingAfterDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            live_input_identifier: {
                value: cdktf.stringToHclTerraform(this._liveInputIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            meta: {
                value: cdktf.stringToHclTerraform(this._meta),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recording: {
                value: streamLiveInputRecordingToHclTerraform(this._recording.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "StreamLiveInputRecording",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
