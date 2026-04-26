// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareStreamInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamInputOutputReference extends cdktf.ComplexObject {
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
    // height - computed: true, optional: false, required: false
    get height() {
        return this.getNumberAttribute('height');
    }
    // width - computed: true, optional: false, required: false
    get width() {
        return this.getNumberAttribute('width');
    }
}
export function dataCloudflareStreamPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamPlaybackOutputReference extends cdktf.ComplexObject {
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
    // dash - computed: true, optional: false, required: false
    get dash() {
        return this.getStringAttribute('dash');
    }
    // hls - computed: true, optional: false, required: false
    get hls() {
        return this.getStringAttribute('hls');
    }
}
export function dataCloudflareStreamPublicDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamPublicDetailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamPublicDetailsOutputReference extends cdktf.ComplexObject {
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
    // channel_link - computed: true, optional: false, required: false
    get channelLink() {
        return this.getStringAttribute('channel_link');
    }
    // logo - computed: true, optional: false, required: false
    get logo() {
        return this.getStringAttribute('logo');
    }
    // media_id - computed: true, optional: false, required: false
    get mediaId() {
        return this.getNumberAttribute('media_id');
    }
    // share_link - computed: true, optional: false, required: false
    get shareLink() {
        return this.getStringAttribute('share_link');
    }
    // title - computed: true, optional: false, required: false
    get title() {
        return this.getStringAttribute('title');
    }
}
export function dataCloudflareStreamStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamStatusOutputReference extends cdktf.ComplexObject {
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
    // error_reason_code - computed: true, optional: false, required: false
    get errorReasonCode() {
        return this.getStringAttribute('error_reason_code');
    }
    // error_reason_text - computed: true, optional: false, required: false
    get errorReasonText() {
        return this.getStringAttribute('error_reason_text');
    }
    // pct_complete - computed: true, optional: false, required: false
    get pctComplete() {
        return this.getStringAttribute('pct_complete');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
}
export function dataCloudflareStreamWatermarkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamWatermarkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamWatermarkOutputReference extends cdktf.ComplexObject {
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
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // downloaded_from - computed: true, optional: false, required: false
    get downloadedFrom() {
        return this.getStringAttribute('downloaded_from');
    }
    // height - computed: true, optional: false, required: false
    get height() {
        return this.getNumberAttribute('height');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // opacity - computed: true, optional: false, required: false
    get opacity() {
        return this.getNumberAttribute('opacity');
    }
    // padding - computed: true, optional: false, required: false
    get padding() {
        return this.getNumberAttribute('padding');
    }
    // position - computed: true, optional: false, required: false
    get position() {
        return this.getStringAttribute('position');
    }
    // scale - computed: true, optional: false, required: false
    get scale() {
        return this.getNumberAttribute('scale');
    }
    // size - computed: true, optional: false, required: false
    get size() {
        return this.getNumberAttribute('size');
    }
    // uid - computed: true, optional: false, required: false
    get uid() {
        return this.getStringAttribute('uid');
    }
    // width - computed: true, optional: false, required: false
    get width() {
        return this.getNumberAttribute('width');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream cloudflare_stream}
*/
export class DataCloudflareStream extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_stream";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStream to import
    * @param importFromId The id of the existing DataCloudflareStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStream to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream cloudflare_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_stream',
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
        this._identifier = config.identifier;
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
    // allowed_origins - computed: true, optional: false, required: false
    get allowedOrigins() {
        return this.getListAttribute('allowed_origins');
    }
    // clipped_from - computed: true, optional: false, required: false
    get clippedFrom() {
        return this.getStringAttribute('clipped_from');
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // creator - computed: true, optional: false, required: false
    get creator() {
        return this.getStringAttribute('creator');
    }
    // duration - computed: true, optional: false, required: false
    get duration() {
        return this.getNumberAttribute('duration');
    }
    // identifier - computed: false, optional: false, required: true
    _identifier;
    get identifier() {
        return this.getStringAttribute('identifier');
    }
    set identifier(value) {
        this._identifier = value;
    }
    // Temporarily expose input value. Use with caution.
    get identifierInput() {
        return this._identifier;
    }
    // input - computed: true, optional: false, required: false
    _input = new DataCloudflareStreamInputOutputReference(this, "input");
    get input() {
        return this._input;
    }
    // live_input - computed: true, optional: false, required: false
    get liveInput() {
        return this.getStringAttribute('live_input');
    }
    // max_duration_seconds - computed: true, optional: false, required: false
    get maxDurationSeconds() {
        return this.getNumberAttribute('max_duration_seconds');
    }
    // max_size_bytes - computed: true, optional: false, required: false
    get maxSizeBytes() {
        return this.getNumberAttribute('max_size_bytes');
    }
    // meta - computed: true, optional: false, required: false
    get meta() {
        return this.getStringAttribute('meta');
    }
    // modified - computed: true, optional: false, required: false
    get modified() {
        return this.getStringAttribute('modified');
    }
    // playback - computed: true, optional: false, required: false
    _playback = new DataCloudflareStreamPlaybackOutputReference(this, "playback");
    get playback() {
        return this._playback;
    }
    // preview - computed: true, optional: false, required: false
    get preview() {
        return this.getStringAttribute('preview');
    }
    // public_details - computed: true, optional: false, required: false
    _publicDetails = new DataCloudflareStreamPublicDetailsOutputReference(this, "public_details");
    get publicDetails() {
        return this._publicDetails;
    }
    // ready_to_stream - computed: true, optional: false, required: false
    get readyToStream() {
        return this.getBooleanAttribute('ready_to_stream');
    }
    // ready_to_stream_at - computed: true, optional: false, required: false
    get readyToStreamAt() {
        return this.getStringAttribute('ready_to_stream_at');
    }
    // require_signed_urls - computed: true, optional: false, required: false
    get requireSignedUrls() {
        return this.getBooleanAttribute('require_signed_urls');
    }
    // scheduled_deletion - computed: true, optional: false, required: false
    get scheduledDeletion() {
        return this.getStringAttribute('scheduled_deletion');
    }
    // size - computed: true, optional: false, required: false
    get size() {
        return this.getNumberAttribute('size');
    }
    // status - computed: true, optional: false, required: false
    _status = new DataCloudflareStreamStatusOutputReference(this, "status");
    get status() {
        return this._status;
    }
    // thumbnail - computed: true, optional: false, required: false
    get thumbnail() {
        return this.getStringAttribute('thumbnail');
    }
    // thumbnail_timestamp_pct - computed: true, optional: false, required: false
    get thumbnailTimestampPct() {
        return this.getNumberAttribute('thumbnail_timestamp_pct');
    }
    // uid - computed: true, optional: false, required: false
    get uid() {
        return this.getStringAttribute('uid');
    }
    // upload_expiry - computed: true, optional: false, required: false
    get uploadExpiry() {
        return this.getStringAttribute('upload_expiry');
    }
    // uploaded - computed: true, optional: false, required: false
    get uploaded() {
        return this.getStringAttribute('uploaded');
    }
    // watermark - computed: true, optional: false, required: false
    _watermark = new DataCloudflareStreamWatermarkOutputReference(this, "watermark");
    get watermark() {
        return this._watermark;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            identifier: cdktf.stringToTerraform(this._identifier),
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
            identifier: {
                value: cdktf.stringToHclTerraform(this._identifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
