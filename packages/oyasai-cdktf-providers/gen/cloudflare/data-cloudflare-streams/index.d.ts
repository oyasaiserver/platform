import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareStreamsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#account_id DataCloudflareStreams#account_id}
    */
    readonly accountId?: string;
    /**
    * Alias for 'start'. Returns videos created after this date/time (RFC 3339 format).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#after DataCloudflareStreams#after}
    */
    readonly after?: string;
    /**
    * Lists videos in ascending order of creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#asc DataCloudflareStreams#asc}
    */
    readonly asc?: boolean | cdktf.IResolvable;
    /**
    * Alias for 'end'. Returns videos created before this date/time (RFC 3339 format).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#before DataCloudflareStreams#before}
    */
    readonly before?: string;
    /**
    * A user-defined identifier for the media creator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#creator DataCloudflareStreams#creator}
    */
    readonly creator?: string;
    /**
    * Lists videos created before the specified date.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#end DataCloudflareStreams#end}
    */
    readonly end?: string;
    /**
    * Filter by video ID(s). Can be a single ID or a comma-separated list of IDs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#id DataCloudflareStreams#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Includes the total number of videos associated with the submitted query parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#include_counts DataCloudflareStreams#include_counts}
    */
    readonly includeCounts?: boolean | cdktf.IResolvable;
    /**
    * Maximum number of videos to return (default 1000, max 1000).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#limit DataCloudflareStreams#limit}
    */
    readonly limit?: number;
    /**
    * Filter by live input ID to find videos associated with a specific live stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#live_input_id DataCloudflareStreams#live_input_id}
    */
    readonly liveInputId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#max_items DataCloudflareStreams#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filter by video name/UID(s). Can be a single name or a comma-separated list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#name DataCloudflareStreams#name}
    */
    readonly name?: string;
    /**
    * Provides a partial word match of the `name` key in the `meta` field. Slow for medium to large video libraries. May be unavailable for very large libraries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#search DataCloudflareStreams#search}
    */
    readonly search?: string;
    /**
    * Lists videos created after the specified date.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#start DataCloudflareStreams#start}
    */
    readonly start?: string;
    /**
    * Specifies the processing status for all quality levels for a video.
    * Available values: "pendingupload", "downloading", "queued", "inprogress", "ready", "error", "live-inprogress".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#status DataCloudflareStreams#status}
    */
    readonly status?: string;
    /**
    * Specifies whether the video is `vod` or `live`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#type DataCloudflareStreams#type}
    */
    readonly type?: string;
    /**
    * Provides a fast, exact string match on the `name` key in the `meta` field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#video_name DataCloudflareStreams#video_name}
    */
    readonly videoName?: string;
}
export interface DataCloudflareStreamsResultInput {
}
export declare function dataCloudflareStreamsResultInputToTerraform(struct?: DataCloudflareStreamsResultInput): any;
export declare function dataCloudflareStreamsResultInputToHclTerraform(struct?: DataCloudflareStreamsResultInput): any;
export declare class DataCloudflareStreamsResultInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamsResultInput | undefined;
    set internalValue(value: DataCloudflareStreamsResultInput | undefined);
    get height(): any;
    get width(): any;
}
export interface DataCloudflareStreamsResultPlayback {
}
export declare function dataCloudflareStreamsResultPlaybackToTerraform(struct?: DataCloudflareStreamsResultPlayback): any;
export declare function dataCloudflareStreamsResultPlaybackToHclTerraform(struct?: DataCloudflareStreamsResultPlayback): any;
export declare class DataCloudflareStreamsResultPlaybackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamsResultPlayback | undefined;
    set internalValue(value: DataCloudflareStreamsResultPlayback | undefined);
    get dash(): any;
    get hls(): any;
}
export interface DataCloudflareStreamsResultPublicDetails {
}
export declare function dataCloudflareStreamsResultPublicDetailsToTerraform(struct?: DataCloudflareStreamsResultPublicDetails): any;
export declare function dataCloudflareStreamsResultPublicDetailsToHclTerraform(struct?: DataCloudflareStreamsResultPublicDetails): any;
export declare class DataCloudflareStreamsResultPublicDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamsResultPublicDetails | undefined;
    set internalValue(value: DataCloudflareStreamsResultPublicDetails | undefined);
    get channelLink(): any;
    get logo(): any;
    get mediaId(): any;
    get shareLink(): any;
    get title(): any;
}
export interface DataCloudflareStreamsResultStatus {
}
export declare function dataCloudflareStreamsResultStatusToTerraform(struct?: DataCloudflareStreamsResultStatus): any;
export declare function dataCloudflareStreamsResultStatusToHclTerraform(struct?: DataCloudflareStreamsResultStatus): any;
export declare class DataCloudflareStreamsResultStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamsResultStatus | undefined;
    set internalValue(value: DataCloudflareStreamsResultStatus | undefined);
    get errorReasonCode(): any;
    get errorReasonText(): any;
    get pctComplete(): any;
    get state(): any;
}
export interface DataCloudflareStreamsResultWatermark {
}
export declare function dataCloudflareStreamsResultWatermarkToTerraform(struct?: DataCloudflareStreamsResultWatermark): any;
export declare function dataCloudflareStreamsResultWatermarkToHclTerraform(struct?: DataCloudflareStreamsResultWatermark): any;
export declare class DataCloudflareStreamsResultWatermarkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamsResultWatermark | undefined;
    set internalValue(value: DataCloudflareStreamsResultWatermark | undefined);
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
export interface DataCloudflareStreamsResult {
}
export declare function dataCloudflareStreamsResultToTerraform(struct?: DataCloudflareStreamsResult): any;
export declare function dataCloudflareStreamsResultToHclTerraform(struct?: DataCloudflareStreamsResult): any;
export declare class DataCloudflareStreamsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareStreamsResult | undefined;
    set internalValue(value: DataCloudflareStreamsResult | undefined);
    get allowedOrigins(): any;
    get clippedFrom(): any;
    get created(): any;
    get creator(): any;
    get duration(): any;
    private _input;
    get input(): DataCloudflareStreamsResultInputOutputReference;
    get liveInput(): any;
    get maxDurationSeconds(): any;
    get maxSizeBytes(): any;
    get meta(): any;
    get modified(): any;
    private _playback;
    get playback(): DataCloudflareStreamsResultPlaybackOutputReference;
    get preview(): any;
    private _publicDetails;
    get publicDetails(): DataCloudflareStreamsResultPublicDetailsOutputReference;
    get readyToStream(): any;
    get readyToStreamAt(): any;
    get requireSignedUrls(): any;
    get scheduledDeletion(): any;
    get size(): any;
    private _status;
    get status(): DataCloudflareStreamsResultStatusOutputReference;
    get thumbnail(): any;
    get thumbnailTimestampPct(): any;
    get uid(): any;
    get uploadExpiry(): any;
    get uploaded(): any;
    private _watermark;
    get watermark(): DataCloudflareStreamsResultWatermarkOutputReference;
}
export declare class DataCloudflareStreamsResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareStreamsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams cloudflare_streams}
*/
export declare class DataCloudflareStreams extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_streams";
    /**
    * Generates CDKTF code for importing a DataCloudflareStreams resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreams to import
    * @param importFromId The id of the existing DataCloudflareStreams that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreams to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/streams cloudflare_streams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareStreamsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _after?;
    get after(): string;
    set after(value: string);
    resetAfter(): void;
    get afterInput(): string;
    private _asc?;
    get asc(): boolean | cdktf.IResolvable;
    set asc(value: boolean | cdktf.IResolvable);
    resetAsc(): void;
    get ascInput(): any;
    private _before?;
    get before(): string;
    set before(value: string);
    resetBefore(): void;
    get beforeInput(): string;
    private _creator?;
    get creator(): string;
    set creator(value: string);
    resetCreator(): void;
    get creatorInput(): string;
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _includeCounts?;
    get includeCounts(): boolean | cdktf.IResolvable;
    set includeCounts(value: boolean | cdktf.IResolvable);
    resetIncludeCounts(): void;
    get includeCountsInput(): any;
    private _limit?;
    get limit(): number;
    set limit(value: number);
    resetLimit(): void;
    get limitInput(): number;
    private _liveInputId?;
    get liveInputId(): string;
    set liveInputId(value: string);
    resetLiveInputId(): void;
    get liveInputIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _result;
    get result(): DataCloudflareStreamsResultList;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _videoName?;
    get videoName(): string;
    set videoName(value: string);
    resetVideoName(): void;
    get videoNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
