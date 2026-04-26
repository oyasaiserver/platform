import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareStreamLiveInputConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input#account_id DataCloudflareStreamLiveInput#account_id}
    */
    readonly accountId?: string;
    /**
    * A unique identifier for a live input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input#live_input_identifier DataCloudflareStreamLiveInput#live_input_identifier}
    */
    readonly liveInputIdentifier: string;
}
export interface DataCloudflareStreamLiveInputRecording {
}
export declare function dataCloudflareStreamLiveInputRecordingToTerraform(struct?: DataCloudflareStreamLiveInputRecording): any;
export declare function dataCloudflareStreamLiveInputRecordingToHclTerraform(struct?: DataCloudflareStreamLiveInputRecording): any;
export declare class DataCloudflareStreamLiveInputRecordingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamLiveInputRecording | undefined;
    set internalValue(value: DataCloudflareStreamLiveInputRecording | undefined);
    get allowedOrigins(): any;
    get hideLiveViewerCount(): any;
    get mode(): any;
    get requireSignedUrls(): any;
    get timeoutSeconds(): any;
}
export interface DataCloudflareStreamLiveInputRtmps {
}
export declare function dataCloudflareStreamLiveInputRtmpsToTerraform(struct?: DataCloudflareStreamLiveInputRtmps): any;
export declare function dataCloudflareStreamLiveInputRtmpsToHclTerraform(struct?: DataCloudflareStreamLiveInputRtmps): any;
export declare class DataCloudflareStreamLiveInputRtmpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamLiveInputRtmps | undefined;
    set internalValue(value: DataCloudflareStreamLiveInputRtmps | undefined);
    get streamKey(): any;
    get url(): any;
}
export interface DataCloudflareStreamLiveInputRtmpsPlayback {
}
export declare function dataCloudflareStreamLiveInputRtmpsPlaybackToTerraform(struct?: DataCloudflareStreamLiveInputRtmpsPlayback): any;
export declare function dataCloudflareStreamLiveInputRtmpsPlaybackToHclTerraform(struct?: DataCloudflareStreamLiveInputRtmpsPlayback): any;
export declare class DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamLiveInputRtmpsPlayback | undefined;
    set internalValue(value: DataCloudflareStreamLiveInputRtmpsPlayback | undefined);
    get streamKey(): any;
    get url(): any;
}
export interface DataCloudflareStreamLiveInputSrt {
}
export declare function dataCloudflareStreamLiveInputSrtToTerraform(struct?: DataCloudflareStreamLiveInputSrt): any;
export declare function dataCloudflareStreamLiveInputSrtToHclTerraform(struct?: DataCloudflareStreamLiveInputSrt): any;
export declare class DataCloudflareStreamLiveInputSrtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamLiveInputSrt | undefined;
    set internalValue(value: DataCloudflareStreamLiveInputSrt | undefined);
    get passphrase(): any;
    get streamId(): any;
    get url(): any;
}
export interface DataCloudflareStreamLiveInputSrtPlayback {
}
export declare function dataCloudflareStreamLiveInputSrtPlaybackToTerraform(struct?: DataCloudflareStreamLiveInputSrtPlayback): any;
export declare function dataCloudflareStreamLiveInputSrtPlaybackToHclTerraform(struct?: DataCloudflareStreamLiveInputSrtPlayback): any;
export declare class DataCloudflareStreamLiveInputSrtPlaybackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamLiveInputSrtPlayback | undefined;
    set internalValue(value: DataCloudflareStreamLiveInputSrtPlayback | undefined);
    get passphrase(): any;
    get streamId(): any;
    get url(): any;
}
export interface DataCloudflareStreamLiveInputWebRtc {
}
export declare function dataCloudflareStreamLiveInputWebRtcToTerraform(struct?: DataCloudflareStreamLiveInputWebRtc): any;
export declare function dataCloudflareStreamLiveInputWebRtcToHclTerraform(struct?: DataCloudflareStreamLiveInputWebRtc): any;
export declare class DataCloudflareStreamLiveInputWebRtcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamLiveInputWebRtc | undefined;
    set internalValue(value: DataCloudflareStreamLiveInputWebRtc | undefined);
    get url(): any;
}
export interface DataCloudflareStreamLiveInputWebRtcPlayback {
}
export declare function dataCloudflareStreamLiveInputWebRtcPlaybackToTerraform(struct?: DataCloudflareStreamLiveInputWebRtcPlayback): any;
export declare function dataCloudflareStreamLiveInputWebRtcPlaybackToHclTerraform(struct?: DataCloudflareStreamLiveInputWebRtcPlayback): any;
export declare class DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareStreamLiveInputWebRtcPlayback | undefined;
    set internalValue(value: DataCloudflareStreamLiveInputWebRtcPlayback | undefined);
    get url(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input cloudflare_stream_live_input}
*/
export declare class DataCloudflareStreamLiveInput extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_stream_live_input";
    /**
    * Generates CDKTF code for importing a DataCloudflareStreamLiveInput resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreamLiveInput to import
    * @param importFromId The id of the existing DataCloudflareStreamLiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreamLiveInput to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_live_input cloudflare_stream_live_input} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamLiveInputConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareStreamLiveInputConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get created(): any;
    get deleteRecordingAfterDays(): any;
    get enabled(): any;
    private _liveInputIdentifier?;
    get liveInputIdentifier(): string;
    set liveInputIdentifier(value: string);
    get liveInputIdentifierInput(): string;
    get meta(): any;
    get modified(): any;
    private _recording;
    get recording(): DataCloudflareStreamLiveInputRecordingOutputReference;
    private _rtmps;
    get rtmps(): DataCloudflareStreamLiveInputRtmpsOutputReference;
    private _rtmpsPlayback;
    get rtmpsPlayback(): DataCloudflareStreamLiveInputRtmpsPlaybackOutputReference;
    private _srt;
    get srt(): DataCloudflareStreamLiveInputSrtOutputReference;
    private _srtPlayback;
    get srtPlayback(): DataCloudflareStreamLiveInputSrtPlaybackOutputReference;
    get status(): any;
    get uid(): any;
    private _webRtc;
    get webRtc(): DataCloudflareStreamLiveInputWebRtcOutputReference;
    private _webRtcPlayback;
    get webRtcPlayback(): DataCloudflareStreamLiveInputWebRtcPlaybackOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
