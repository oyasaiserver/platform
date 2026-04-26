// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareStreamLiveInputRecordingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamLiveInputRecordingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamLiveInputRecordingOutputReference extends cdktf.ComplexObject {
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
    // allowed_origins - computed: true, optional: false, required: false
    get allowedOrigins() {
        return this.getListAttribute('allowed_origins');
    }
    // hide_live_viewer_count - computed: true, optional: false, required: false
    get hideLiveViewerCount() {
        return this.getBooleanAttribute('hide_live_viewer_count');
    }
    // mode - computed: true, optional: false, required: false
    get mode() {
        return this.getStringAttribute('mode');
    }
    // require_signed_urls - computed: true, optional: false, required: false
    get requireSignedUrls() {
        return this.getBooleanAttribute('require_signed_urls');
    }
    // timeout_seconds - computed: true, optional: false, required: false
    get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
}
export function dataCloudflareStreamLiveInputRtmpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamLiveInputRtmpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamLiveInputRtmpsOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareStreamLiveInputRtmpsPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamLiveInputRtmpsPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareStreamLiveInputSrtToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamLiveInputSrtToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamLiveInputSrtOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareStreamLiveInputSrtPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamLiveInputSrtPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamLiveInputSrtPlaybackOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareStreamLiveInputWebRtcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamLiveInputWebRtcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamLiveInputWebRtcOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareStreamLiveInputWebRtcPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamLiveInputWebRtcPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input cloudflare_stream_live_input}
*/
export class DataCloudflareStreamLiveInput extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_stream_live_input";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareStreamLiveInput resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreamLiveInput to import
    * @param importFromId The id of the existing DataCloudflareStreamLiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreamLiveInput to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_live_input", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input cloudflare_stream_live_input} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamLiveInputConfig
    */
    constructor(scope, id, config) {
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
        this._liveInputIdentifier = config.liveInputIdentifier;
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
    // delete_recording_after_days - computed: true, optional: false, required: false
    get deleteRecordingAfterDays() {
        return this.getNumberAttribute('delete_recording_after_days');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // live_input_identifier - computed: false, optional: false, required: true
    _liveInputIdentifier;
    get liveInputIdentifier() {
        return this.getStringAttribute('live_input_identifier');
    }
    set liveInputIdentifier(value) {
        this._liveInputIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    get liveInputIdentifierInput() {
        return this._liveInputIdentifier;
    }
    // meta - computed: true, optional: false, required: false
    get meta() {
        return this.getStringAttribute('meta');
    }
    // modified - computed: true, optional: false, required: false
    get modified() {
        return this.getStringAttribute('modified');
    }
    // recording - computed: true, optional: false, required: false
    _recording = new DataCloudflareStreamLiveInputRecordingOutputReference(this, "recording");
    get recording() {
        return this._recording;
    }
    // rtmps - computed: true, optional: false, required: false
    _rtmps = new DataCloudflareStreamLiveInputRtmpsOutputReference(this, "rtmps");
    get rtmps() {
        return this._rtmps;
    }
    // rtmps_playback - computed: true, optional: false, required: false
    _rtmpsPlayback = new DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference(this, "rtmps_playback");
    get rtmpsPlayback() {
        return this._rtmpsPlayback;
    }
    // srt - computed: true, optional: false, required: false
    _srt = new DataCloudflareStreamLiveInputSrtOutputReference(this, "srt");
    get srt() {
        return this._srt;
    }
    // srt_playback - computed: true, optional: false, required: false
    _srtPlayback = new DataCloudflareStreamLiveInputSrtPlaybackOutputReference(this, "srt_playback");
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
    _webRtc = new DataCloudflareStreamLiveInputWebRtcOutputReference(this, "web_rtc");
    get webRtc() {
        return this._webRtc;
    }
    // web_rtc_playback - computed: true, optional: false, required: false
    _webRtcPlayback = new DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference(this, "web_rtc_playback");
    get webRtcPlayback() {
        return this._webRtcPlayback;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            live_input_identifier: cdktf.stringToTerraform(this._liveInputIdentifier),
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
            live_input_identifier: {
                value: cdktf.stringToHclTerraform(this._liveInputIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
