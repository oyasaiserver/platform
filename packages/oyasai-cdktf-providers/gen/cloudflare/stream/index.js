// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function streamInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function streamInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class StreamInputOutputReference extends cdktf.ComplexObject {
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
export function streamPlaybackToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function streamPlaybackToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class StreamPlaybackOutputReference extends cdktf.ComplexObject {
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
export function streamPublicDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        channel_link: cdktf.stringToTerraform(struct.channelLink),
        logo: cdktf.stringToTerraform(struct.logo),
        share_link: cdktf.stringToTerraform(struct.shareLink),
        title: cdktf.stringToTerraform(struct.title),
    };
}
export function streamPublicDetailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        channel_link: {
            value: cdktf.stringToHclTerraform(struct.channelLink),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logo: {
            value: cdktf.stringToHclTerraform(struct.logo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_link: {
            value: cdktf.stringToHclTerraform(struct.shareLink),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        title: {
            value: cdktf.stringToHclTerraform(struct.title),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class StreamPublicDetailsOutputReference extends cdktf.ComplexObject {
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
        if (this._channelLink !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelLink = this._channelLink;
        }
        if (this._logo !== undefined) {
            hasAnyValues = true;
            internalValueResult.logo = this._logo;
        }
        if (this._shareLink !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareLink = this._shareLink;
        }
        if (this._title !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channelLink = undefined;
            this._logo = undefined;
            this._shareLink = undefined;
            this._title = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channelLink = value.channelLink;
            this._logo = value.logo;
            this._shareLink = value.shareLink;
            this._title = value.title;
        }
    }
    // channel_link - computed: false, optional: true, required: false
    _channelLink;
    get channelLink() {
        return this.getStringAttribute('channel_link');
    }
    set channelLink(value) {
        this._channelLink = value;
    }
    resetChannelLink() {
        this._channelLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get channelLinkInput() {
        return this._channelLink;
    }
    // logo - computed: false, optional: true, required: false
    _logo;
    get logo() {
        return this.getStringAttribute('logo');
    }
    set logo(value) {
        this._logo = value;
    }
    resetLogo() {
        this._logo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logoInput() {
        return this._logo;
    }
    // share_link - computed: false, optional: true, required: false
    _shareLink;
    get shareLink() {
        return this.getStringAttribute('share_link');
    }
    set shareLink(value) {
        this._shareLink = value;
    }
    resetShareLink() {
        this._shareLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shareLinkInput() {
        return this._shareLink;
    }
    // title - computed: false, optional: true, required: false
    _title;
    get title() {
        return this.getStringAttribute('title');
    }
    set title(value) {
        this._title = value;
    }
    resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get titleInput() {
        return this._title;
    }
}
export function streamStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function streamStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class StreamStatusOutputReference extends cdktf.ComplexObject {
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
export function streamWatermarkToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function streamWatermarkToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class StreamWatermarkOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream cloudflare_stream}
*/
export class Stream extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_stream";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Stream to import
    * @param importFromId The id of the existing Stream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Stream to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream cloudflare_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamConfig = {}
    */
    constructor(scope, id, config = {}) {
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
        this._allowedOrigins = config.allowedOrigins;
        this._creator = config.creator;
        this._identifier = config.identifier;
        this._maxDurationSeconds = config.maxDurationSeconds;
        this._meta = config.meta;
        this._publicDetails.internalValue = config.publicDetails;
        this._requireSignedUrls = config.requireSignedUrls;
        this._scheduledDeletion = config.scheduledDeletion;
        this._thumbnailTimestampPct = config.thumbnailTimestampPct;
        this._uid = config.uid;
        this._uploadExpiry = config.uploadExpiry;
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
    // allowed_origins - computed: false, optional: true, required: false
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
    // clipped_from - computed: true, optional: false, required: false
    get clippedFrom() {
        return this.getStringAttribute('clipped_from');
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
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
    // duration - computed: true, optional: false, required: false
    get duration() {
        return this.getNumberAttribute('duration');
    }
    // identifier - computed: false, optional: true, required: false
    _identifier;
    get identifier() {
        return this.getStringAttribute('identifier');
    }
    set identifier(value) {
        this._identifier = value;
    }
    resetIdentifier() {
        this._identifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identifierInput() {
        return this._identifier;
    }
    // input - computed: true, optional: false, required: false
    _input = new StreamInputOutputReference(this, "input");
    get input() {
        return this._input;
    }
    // live_input - computed: true, optional: false, required: false
    get liveInput() {
        return this.getStringAttribute('live_input');
    }
    // max_duration_seconds - computed: false, optional: true, required: false
    _maxDurationSeconds;
    get maxDurationSeconds() {
        return this.getNumberAttribute('max_duration_seconds');
    }
    set maxDurationSeconds(value) {
        this._maxDurationSeconds = value;
    }
    resetMaxDurationSeconds() {
        this._maxDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxDurationSecondsInput() {
        return this._maxDurationSeconds;
    }
    // max_size_bytes - computed: true, optional: false, required: false
    get maxSizeBytes() {
        return this.getNumberAttribute('max_size_bytes');
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
    // playback - computed: true, optional: false, required: false
    _playback = new StreamPlaybackOutputReference(this, "playback");
    get playback() {
        return this._playback;
    }
    // preview - computed: true, optional: false, required: false
    get preview() {
        return this.getStringAttribute('preview');
    }
    // public_details - computed: false, optional: true, required: false
    _publicDetails = new StreamPublicDetailsOutputReference(this, "public_details");
    get publicDetails() {
        return this._publicDetails;
    }
    putPublicDetails(value) {
        this._publicDetails.internalValue = value;
    }
    resetPublicDetails() {
        this._publicDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicDetailsInput() {
        return this._publicDetails.internalValue;
    }
    // ready_to_stream - computed: true, optional: false, required: false
    get readyToStream() {
        return this.getBooleanAttribute('ready_to_stream');
    }
    // ready_to_stream_at - computed: true, optional: false, required: false
    get readyToStreamAt() {
        return this.getStringAttribute('ready_to_stream_at');
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
    // scheduled_deletion - computed: false, optional: true, required: false
    _scheduledDeletion;
    get scheduledDeletion() {
        return this.getStringAttribute('scheduled_deletion');
    }
    set scheduledDeletion(value) {
        this._scheduledDeletion = value;
    }
    resetScheduledDeletion() {
        this._scheduledDeletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scheduledDeletionInput() {
        return this._scheduledDeletion;
    }
    // size - computed: true, optional: false, required: false
    get size() {
        return this.getNumberAttribute('size');
    }
    // status - computed: true, optional: false, required: false
    _status = new StreamStatusOutputReference(this, "status");
    get status() {
        return this._status;
    }
    // thumbnail - computed: true, optional: false, required: false
    get thumbnail() {
        return this.getStringAttribute('thumbnail');
    }
    // thumbnail_timestamp_pct - computed: true, optional: true, required: false
    _thumbnailTimestampPct;
    get thumbnailTimestampPct() {
        return this.getNumberAttribute('thumbnail_timestamp_pct');
    }
    set thumbnailTimestampPct(value) {
        this._thumbnailTimestampPct = value;
    }
    resetThumbnailTimestampPct() {
        this._thumbnailTimestampPct = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get thumbnailTimestampPctInput() {
        return this._thumbnailTimestampPct;
    }
    // uid - computed: false, optional: true, required: false
    _uid;
    get uid() {
        return this.getStringAttribute('uid');
    }
    set uid(value) {
        this._uid = value;
    }
    resetUid() {
        this._uid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uidInput() {
        return this._uid;
    }
    // upload_expiry - computed: false, optional: true, required: false
    _uploadExpiry;
    get uploadExpiry() {
        return this.getStringAttribute('upload_expiry');
    }
    set uploadExpiry(value) {
        this._uploadExpiry = value;
    }
    resetUploadExpiry() {
        this._uploadExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uploadExpiryInput() {
        return this._uploadExpiry;
    }
    // uploaded - computed: true, optional: false, required: false
    get uploaded() {
        return this.getStringAttribute('uploaded');
    }
    // watermark - computed: true, optional: false, required: false
    _watermark = new StreamWatermarkOutputReference(this, "watermark");
    get watermark() {
        return this._watermark;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOrigins),
            creator: cdktf.stringToTerraform(this._creator),
            identifier: cdktf.stringToTerraform(this._identifier),
            max_duration_seconds: cdktf.numberToTerraform(this._maxDurationSeconds),
            meta: cdktf.stringToTerraform(this._meta),
            public_details: streamPublicDetailsToTerraform(this._publicDetails.internalValue),
            require_signed_urls: cdktf.booleanToTerraform(this._requireSignedUrls),
            scheduled_deletion: cdktf.stringToTerraform(this._scheduledDeletion),
            thumbnail_timestamp_pct: cdktf.numberToTerraform(this._thumbnailTimestampPct),
            uid: cdktf.stringToTerraform(this._uid),
            upload_expiry: cdktf.stringToTerraform(this._uploadExpiry),
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
            allowed_origins: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOrigins),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            creator: {
                value: cdktf.stringToHclTerraform(this._creator),
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
            max_duration_seconds: {
                value: cdktf.numberToHclTerraform(this._maxDurationSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            meta: {
                value: cdktf.stringToHclTerraform(this._meta),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public_details: {
                value: streamPublicDetailsToHclTerraform(this._publicDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "StreamPublicDetails",
            },
            require_signed_urls: {
                value: cdktf.booleanToHclTerraform(this._requireSignedUrls),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            scheduled_deletion: {
                value: cdktf.stringToHclTerraform(this._scheduledDeletion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            thumbnail_timestamp_pct: {
                value: cdktf.numberToHclTerraform(this._thumbnailTimestampPct),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            uid: {
                value: cdktf.stringToHclTerraform(this._uid),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            upload_expiry: {
                value: cdktf.stringToHclTerraform(this._uploadExpiry),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
