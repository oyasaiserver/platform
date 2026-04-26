// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareStreamsResultInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamsResultInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamsResultInputOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareStreamsResultPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamsResultPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamsResultPlaybackOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareStreamsResultPublicDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamsResultPublicDetailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamsResultPublicDetailsOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareStreamsResultStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamsResultStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamsResultStatusOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareStreamsResultWatermarkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamsResultWatermarkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamsResultWatermarkOutputReference extends cdktf.ComplexObject {
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
export function dataCloudflareStreamsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareStreamsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareStreamsResultOutputReference extends cdktf.ComplexObject {
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
    // input - computed: true, optional: false, required: false
    _input = new DataCloudflareStreamsResultInputOutputReference(this, "input");
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
    _playback = new DataCloudflareStreamsResultPlaybackOutputReference(this, "playback");
    get playback() {
        return this._playback;
    }
    // preview - computed: true, optional: false, required: false
    get preview() {
        return this.getStringAttribute('preview');
    }
    // public_details - computed: true, optional: false, required: false
    _publicDetails = new DataCloudflareStreamsResultPublicDetailsOutputReference(this, "public_details");
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
    _status = new DataCloudflareStreamsResultStatusOutputReference(this, "status");
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
    _watermark = new DataCloudflareStreamsResultWatermarkOutputReference(this, "watermark");
    get watermark() {
        return this._watermark;
    }
}
export class DataCloudflareStreamsResultList extends cdktf.ComplexList {
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
        return new DataCloudflareStreamsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams cloudflare_streams}
*/
export class DataCloudflareStreams extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_streams";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareStreams resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreams to import
    * @param importFromId The id of the existing DataCloudflareStreams that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreams to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_streams", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams cloudflare_streams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_streams',
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
        this._after = config.after;
        this._asc = config.asc;
        this._before = config.before;
        this._creator = config.creator;
        this._end = config.end;
        this._id = config.id;
        this._includeCounts = config.includeCounts;
        this._limit = config.limit;
        this._liveInputId = config.liveInputId;
        this._maxItems = config.maxItems;
        this._name = config.name;
        this._search = config.search;
        this._start = config.start;
        this._status = config.status;
        this._type = config.type;
        this._videoName = config.videoName;
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
    // after - computed: false, optional: true, required: false
    _after;
    get after() {
        return this.getStringAttribute('after');
    }
    set after(value) {
        this._after = value;
    }
    resetAfter() {
        this._after = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get afterInput() {
        return this._after;
    }
    // asc - computed: true, optional: true, required: false
    _asc;
    get asc() {
        return this.getBooleanAttribute('asc');
    }
    set asc(value) {
        this._asc = value;
    }
    resetAsc() {
        this._asc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ascInput() {
        return this._asc;
    }
    // before - computed: false, optional: true, required: false
    _before;
    get before() {
        return this.getStringAttribute('before');
    }
    set before(value) {
        this._before = value;
    }
    resetBefore() {
        this._before = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get beforeInput() {
        return this._before;
    }
    // creator - computed: false, optional: true, required: false
    _creator;
    get creator() {
        return this.getStringAttribute('creator');
    }
    set creator(value) {
        this._creator = value;
    }
    resetCreator() {
        this._creator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get creatorInput() {
        return this._creator;
    }
    // end - computed: false, optional: true, required: false
    _end;
    get end() {
        return this.getStringAttribute('end');
    }
    set end(value) {
        this._end = value;
    }
    resetEnd() {
        this._end = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endInput() {
        return this._end;
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // include_counts - computed: true, optional: true, required: false
    _includeCounts;
    get includeCounts() {
        return this.getBooleanAttribute('include_counts');
    }
    set includeCounts(value) {
        this._includeCounts = value;
    }
    resetIncludeCounts() {
        this._includeCounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeCountsInput() {
        return this._includeCounts;
    }
    // limit - computed: false, optional: true, required: false
    _limit;
    get limit() {
        return this.getNumberAttribute('limit');
    }
    set limit(value) {
        this._limit = value;
    }
    resetLimit() {
        this._limit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitInput() {
        return this._limit;
    }
    // live_input_id - computed: false, optional: true, required: false
    _liveInputId;
    get liveInputId() {
        return this.getStringAttribute('live_input_id');
    }
    set liveInputId(value) {
        this._liveInputId = value;
    }
    resetLiveInputId() {
        this._liveInputId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get liveInputIdInput() {
        return this._liveInputId;
    }
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
    }
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareStreamsResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // search - computed: false, optional: true, required: false
    _search;
    get search() {
        return this.getStringAttribute('search');
    }
    set search(value) {
        this._search = value;
    }
    resetSearch() {
        this._search = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get searchInput() {
        return this._search;
    }
    // start - computed: false, optional: true, required: false
    _start;
    get start() {
        return this.getStringAttribute('start');
    }
    set start(value) {
        this._start = value;
    }
    resetStart() {
        this._start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startInput() {
        return this._start;
    }
    // status - computed: false, optional: true, required: false
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    // type - computed: false, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // video_name - computed: false, optional: true, required: false
    _videoName;
    get videoName() {
        return this.getStringAttribute('video_name');
    }
    set videoName(value) {
        this._videoName = value;
    }
    resetVideoName() {
        this._videoName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get videoNameInput() {
        return this._videoName;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            after: cdktf.stringToTerraform(this._after),
            asc: cdktf.booleanToTerraform(this._asc),
            before: cdktf.stringToTerraform(this._before),
            creator: cdktf.stringToTerraform(this._creator),
            end: cdktf.stringToTerraform(this._end),
            id: cdktf.stringToTerraform(this._id),
            include_counts: cdktf.booleanToTerraform(this._includeCounts),
            limit: cdktf.numberToTerraform(this._limit),
            live_input_id: cdktf.stringToTerraform(this._liveInputId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
            search: cdktf.stringToTerraform(this._search),
            start: cdktf.stringToTerraform(this._start),
            status: cdktf.stringToTerraform(this._status),
            type: cdktf.stringToTerraform(this._type),
            video_name: cdktf.stringToTerraform(this._videoName),
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
            after: {
                value: cdktf.stringToHclTerraform(this._after),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asc: {
                value: cdktf.booleanToHclTerraform(this._asc),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            before: {
                value: cdktf.stringToHclTerraform(this._before),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            creator: {
                value: cdktf.stringToHclTerraform(this._creator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            end: {
                value: cdktf.stringToHclTerraform(this._end),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            include_counts: {
                value: cdktf.booleanToHclTerraform(this._includeCounts),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            limit: {
                value: cdktf.numberToHclTerraform(this._limit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            live_input_id: {
                value: cdktf.stringToHclTerraform(this._liveInputId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            search: {
                value: cdktf.stringToHclTerraform(this._search),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            start: {
                value: cdktf.stringToHclTerraform(this._start),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            video_name: {
                value: cdktf.stringToHclTerraform(this._videoName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
