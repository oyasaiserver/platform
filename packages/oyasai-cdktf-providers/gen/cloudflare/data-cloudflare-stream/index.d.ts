import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream#account_id DataCloudflareStream#account_id}
    */
    readonly accountId?: string;
    /**
    * A Cloudflare-generated unique identifier for a media item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream#identifier DataCloudflareStream#identifier}
    */
    readonly identifier: string;
}
export interface DataCloudflareStreamInput {
}
export declare function dataCloudflareStreamInputToTerraform(struct?: DataCloudflareStreamInput): any;
export declare function dataCloudflareStreamInputToHclTerraform(struct?: DataCloudflareStreamInput): any;
export declare class DataCloudflareStreamInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamInput | undefined;
    set internalValue(value: DataCloudflareStreamInput | undefined);
    get height(): any;
    get width(): any;
}
export interface DataCloudflareStreamPlayback {
}
export declare function dataCloudflareStreamPlaybackToTerraform(struct?: DataCloudflareStreamPlayback): any;
export declare function dataCloudflareStreamPlaybackToHclTerraform(struct?: DataCloudflareStreamPlayback): any;
export declare class DataCloudflareStreamPlaybackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamPlayback | undefined;
    set internalValue(value: DataCloudflareStreamPlayback | undefined);
    get dash(): any;
    get hls(): any;
}
export interface DataCloudflareStreamPublicDetails {
}
export declare function dataCloudflareStreamPublicDetailsToTerraform(struct?: DataCloudflareStreamPublicDetails): any;
export declare function dataCloudflareStreamPublicDetailsToHclTerraform(struct?: DataCloudflareStreamPublicDetails): any;
export declare class DataCloudflareStreamPublicDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamPublicDetails | undefined;
    set internalValue(value: DataCloudflareStreamPublicDetails | undefined);
    get channelLink(): any;
    get logo(): any;
    get mediaId(): any;
    get shareLink(): any;
    get title(): any;
}
export interface DataCloudflareStreamStatus {
}
export declare function dataCloudflareStreamStatusToTerraform(struct?: DataCloudflareStreamStatus): any;
export declare function dataCloudflareStreamStatusToHclTerraform(struct?: DataCloudflareStreamStatus): any;
export declare class DataCloudflareStreamStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamStatus | undefined;
    set internalValue(value: DataCloudflareStreamStatus | undefined);
    get errorReasonCode(): any;
    get errorReasonText(): any;
    get pctComplete(): any;
    get state(): any;
}
export interface DataCloudflareStreamWatermark {
}
export declare function dataCloudflareStreamWatermarkToTerraform(struct?: DataCloudflareStreamWatermark): any;
export declare function dataCloudflareStreamWatermarkToHclTerraform(struct?: DataCloudflareStreamWatermark): any;
export declare class DataCloudflareStreamWatermarkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamWatermark | undefined;
    set internalValue(value: DataCloudflareStreamWatermark | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream cloudflare_stream}
*/
export declare class DataCloudflareStream extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_stream";
    /**
    * Generates CDKTF code for importing a DataCloudflareStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStream to import
    * @param importFromId The id of the existing DataCloudflareStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStream to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream cloudflare_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareStreamConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get allowedOrigins(): any;
    get clippedFrom(): any;
    get created(): any;
    get creator(): any;
    get duration(): any;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    private _input;
    get input(): DataCloudflareStreamInputOutputReference;
    get liveInput(): any;
    get maxDurationSeconds(): any;
    get maxSizeBytes(): any;
    get meta(): any;
    get modified(): any;
    private _playback;
    get playback(): DataCloudflareStreamPlaybackOutputReference;
    get preview(): any;
    private _publicDetails;
    get publicDetails(): DataCloudflareStreamPublicDetailsOutputReference;
    get readyToStream(): any;
    get readyToStreamAt(): any;
    get requireSignedUrls(): any;
    get scheduledDeletion(): any;
    get size(): any;
    private _status;
    get status(): DataCloudflareStreamStatusOutputReference;
    get thumbnail(): any;
    get thumbnailTimestampPct(): any;
    get uid(): any;
    get uploadExpiry(): any;
    get uploaded(): any;
    private _watermark;
    get watermark(): DataCloudflareStreamWatermarkOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
