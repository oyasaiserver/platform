import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#account_id Stream#account_id}
    */
    readonly accountId?: string;
    /**
    * Lists the origins allowed to display the video. Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#allowed_origins Stream#allowed_origins}
    */
    readonly allowedOrigins?: string[];
    /**
    * A user-defined identifier for the media creator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#creator Stream#creator}
    */
    readonly creator?: string;
    /**
    * A Cloudflare-generated unique identifier for a media item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#identifier Stream#identifier}
    */
    readonly identifier?: string;
    /**
    * The maximum duration in seconds for a video upload. Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of `-1` means the value is unknown.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#max_duration_seconds Stream#max_duration_seconds}
    */
    readonly maxDurationSeconds?: number;
    /**
    * A user modifiable key-value store used to reference other systems of record for managing videos.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#meta Stream#meta}
    */
    readonly meta?: string;
    /**
    * Public details for the video including title, share link, channel link, and logo.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#public_details Stream#public_details}
    */
    readonly publicDetails?: StreamPublicDetails;
    /**
    * Indicates whether the video can be a accessed using the UID. When set to `true`, a signed token must be generated with a signing key to view the video.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#require_signed_urls Stream#require_signed_urls}
    */
    readonly requireSignedUrls?: boolean | cdktf.IResolvable;
    /**
    * Indicates the date and time at which the video will be deleted. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion. If specified, must be at least 30 days from upload time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#scheduled_deletion Stream#scheduled_deletion}
    */
    readonly scheduledDeletion?: string;
    /**
    * The timestamp for a thumbnail image calculated as a percentage value of the video's duration. To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video.  If this value is not set, the default thumbnail image is taken from 0s of the video.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#thumbnail_timestamp_pct Stream#thumbnail_timestamp_pct}
    */
    readonly thumbnailTimestampPct?: number;
    /**
    * The unique identifier for the video. Can be used to verify the video being updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#uid Stream#uid}
    */
    readonly uid?: string;
    /**
    * The date and time when the video upload URL is no longer valid for direct user uploads.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#upload_expiry Stream#upload_expiry}
    */
    readonly uploadExpiry?: string;
}
export interface StreamInput {
}
export declare function streamInputToTerraform(struct?: StreamInput): any;
export declare function streamInputToHclTerraform(struct?: StreamInput): any;
export declare class StreamInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamInput | undefined;
    set internalValue(value: StreamInput | undefined);
    get height(): any;
    get width(): any;
}
export interface StreamPlayback {
}
export declare function streamPlaybackToTerraform(struct?: StreamPlayback): any;
export declare function streamPlaybackToHclTerraform(struct?: StreamPlayback): any;
export declare class StreamPlaybackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamPlayback | undefined;
    set internalValue(value: StreamPlayback | undefined);
    get dash(): any;
    get hls(): any;
}
export interface StreamPublicDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#channel_link Stream#channel_link}
    */
    readonly channelLink?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#logo Stream#logo}
    */
    readonly logo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#share_link Stream#share_link}
    */
    readonly shareLink?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#title Stream#title}
    */
    readonly title?: string;
}
export declare function streamPublicDetailsToTerraform(struct?: StreamPublicDetails | cdktf.IResolvable): any;
export declare function streamPublicDetailsToHclTerraform(struct?: StreamPublicDetails | cdktf.IResolvable): any;
export declare class StreamPublicDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamPublicDetails | cdktf.IResolvable | undefined;
    set internalValue(value: StreamPublicDetails | cdktf.IResolvable | undefined);
    private _channelLink?;
    get channelLink(): string;
    set channelLink(value: string);
    resetChannelLink(): void;
    get channelLinkInput(): string;
    private _logo?;
    get logo(): string;
    set logo(value: string);
    resetLogo(): void;
    get logoInput(): string;
    private _shareLink?;
    get shareLink(): string;
    set shareLink(value: string);
    resetShareLink(): void;
    get shareLinkInput(): string;
    private _title?;
    get title(): string;
    set title(value: string);
    resetTitle(): void;
    get titleInput(): string;
}
export interface StreamStatus {
}
export declare function streamStatusToTerraform(struct?: StreamStatus): any;
export declare function streamStatusToHclTerraform(struct?: StreamStatus): any;
export declare class StreamStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamStatus | undefined;
    set internalValue(value: StreamStatus | undefined);
    get errorReasonCode(): any;
    get errorReasonText(): any;
    get pctComplete(): any;
    get state(): any;
}
export interface StreamWatermark {
}
export declare function streamWatermarkToTerraform(struct?: StreamWatermark): any;
export declare function streamWatermarkToHclTerraform(struct?: StreamWatermark): any;
export declare class StreamWatermarkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamWatermark | undefined;
    set internalValue(value: StreamWatermark | undefined);
    get created(): any;
    get downloadedFrom(): any;
    get height(): any;
    get name(): any;
    get opacity(): any;
    get padding(): any;
    get position(): any;
    get scale(): any;
    get size(): any;
    get uid(): any;
    get width(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream cloudflare_stream}
*/
export declare class Stream extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_stream";
    /**
    * Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Stream to import
    * @param importFromId The id of the existing Stream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Stream to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream cloudflare_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamConfig = {}
    */
    constructor(scope: Construct, id: string, config?: StreamConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _allowedOrigins?;
    get allowedOrigins(): string[];
    set allowedOrigins(value: string[]);
    resetAllowedOrigins(): void;
    get allowedOriginsInput(): string[];
    get clippedFrom(): any;
    get created(): any;
    private _creator?;
    get creator(): string;
    set creator(value: string);
    resetCreator(): void;
    get creatorInput(): string;
    get duration(): any;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string;
    private _input;
    get input(): StreamInputOutputReference;
    get liveInput(): any;
    private _maxDurationSeconds?;
    get maxDurationSeconds(): number;
    set maxDurationSeconds(value: number);
    resetMaxDurationSeconds(): void;
    get maxDurationSecondsInput(): number;
    get maxSizeBytes(): any;
    private _meta?;
    get meta(): string;
    set meta(value: string);
    resetMeta(): void;
    get metaInput(): string;
    get modified(): any;
    private _playback;
    get playback(): StreamPlaybackOutputReference;
    get preview(): any;
    private _publicDetails;
    get publicDetails(): StreamPublicDetailsOutputReference;
    putPublicDetails(value: StreamPublicDetails): void;
    resetPublicDetails(): void;
    get publicDetailsInput(): any;
    get readyToStream(): any;
    get readyToStreamAt(): any;
    private _requireSignedUrls?;
    get requireSignedUrls(): boolean | cdktf.IResolvable;
    set requireSignedUrls(value: boolean | cdktf.IResolvable);
    resetRequireSignedUrls(): void;
    get requireSignedUrlsInput(): any;
    private _scheduledDeletion?;
    get scheduledDeletion(): string;
    set scheduledDeletion(value: string);
    resetScheduledDeletion(): void;
    get scheduledDeletionInput(): string;
    get size(): any;
    private _status;
    get status(): StreamStatusOutputReference;
    get thumbnail(): any;
    private _thumbnailTimestampPct?;
    get thumbnailTimestampPct(): number;
    set thumbnailTimestampPct(value: number);
    resetThumbnailTimestampPct(): void;
    get thumbnailTimestampPctInput(): number;
    private _uid?;
    get uid(): string;
    set uid(value: string);
    resetUid(): void;
    get uidInput(): string;
    private _uploadExpiry?;
    get uploadExpiry(): string;
    set uploadExpiry(value: string);
    resetUploadExpiry(): void;
    get uploadExpiryInput(): string;
    get uploaded(): any;
    private _watermark;
    get watermark(): StreamWatermarkOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
