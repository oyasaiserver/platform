import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StreamLiveInputConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#account_id StreamLiveInput#account_id}
    */
    readonly accountId?: string;
    /**
    * Sets the creator ID asssociated with this live input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#default_creator StreamLiveInput#default_creator}
    */
    readonly defaultCreator?: string;
    /**
    * Indicates the number of days after which the live inputs recordings will be deleted. When a stream completes and the recording is ready, the value is used to calculate a scheduled deletion date for that recording. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#delete_recording_after_days StreamLiveInput#delete_recording_after_days}
    */
    readonly deleteRecordingAfterDays?: number;
    /**
    * Indicates whether the live input is enabled and can accept streams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#enabled StreamLiveInput#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * A unique identifier for a live input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#live_input_identifier StreamLiveInput#live_input_identifier}
    */
    readonly liveInputIdentifier?: string;
    /**
    * A user modifiable key-value store used to reference other systems of record for managing live inputs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#meta StreamLiveInput#meta}
    */
    readonly meta?: string;
    /**
    * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In most cases, the video will initially be viewable as a live video and transition to on-demand after a condition is satisfied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#recording StreamLiveInput#recording}
    */
    readonly recording?: StreamLiveInputRecording;
}
export interface StreamLiveInputRecording {
    /**
    * Lists the origins allowed to display videos created with this input. Enter allowed origin domains in an array and use `*` for wildcard subdomains. An empty array allows videos to be viewed on any origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#allowed_origins StreamLiveInput#allowed_origins}
    */
    readonly allowedOrigins?: string[];
    /**
    * Disables reporting the number of live viewers when this property is set to `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#hide_live_viewer_count StreamLiveInput#hide_live_viewer_count}
    */
    readonly hideLiveViewerCount?: boolean | cdktf.IResolvable;
    /**
    * Specifies the recording behavior for the live input. Set this value to `off` to prevent a recording. Set the value to `automatic` to begin a recording and transition to on-demand after Stream Live stops receiving input.
    * Available values: "off", "automatic".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#mode StreamLiveInput#mode}
    */
    readonly mode?: string;
    /**
    * Indicates if a video using the live input has the `requireSignedURLs` property set. Also enforces access controls on any video recording of the livestream with the live input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#require_signed_urls StreamLiveInput#require_signed_urls}
    */
    readonly requireSignedUrls?: boolean | cdktf.IResolvable;
    /**
    * Determines the amount of time a live input configured in `automatic` mode should wait before a recording transitions from live to on-demand. `0` is recommended for most use cases and indicates the platform default should be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#timeout_seconds StreamLiveInput#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
}
export declare function streamLiveInputRecordingToTerraform(struct?: StreamLiveInputRecording | cdktf.IResolvable): any;
export declare function streamLiveInputRecordingToHclTerraform(struct?: StreamLiveInputRecording | cdktf.IResolvable): any;
export declare class StreamLiveInputRecordingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamLiveInputRecording | cdktf.IResolvable | undefined;
    set internalValue(value: StreamLiveInputRecording | cdktf.IResolvable | undefined);
    private _allowedOrigins?;
    get allowedOrigins(): string[];
    set allowedOrigins(value: string[]);
    resetAllowedOrigins(): void;
    get allowedOriginsInput(): string[];
    private _hideLiveViewerCount?;
    get hideLiveViewerCount(): boolean | cdktf.IResolvable;
    set hideLiveViewerCount(value: boolean | cdktf.IResolvable);
    resetHideLiveViewerCount(): void;
    get hideLiveViewerCountInput(): any;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _requireSignedUrls?;
    get requireSignedUrls(): boolean | cdktf.IResolvable;
    set requireSignedUrls(value: boolean | cdktf.IResolvable);
    resetRequireSignedUrls(): void;
    get requireSignedUrlsInput(): any;
    private _timeoutSeconds?;
    get timeoutSeconds(): number;
    set timeoutSeconds(value: number);
    resetTimeoutSeconds(): void;
    get timeoutSecondsInput(): number;
}
export interface StreamLiveInputRtmps {
}
export declare function streamLiveInputRtmpsToTerraform(struct?: StreamLiveInputRtmps): any;
export declare function streamLiveInputRtmpsToHclTerraform(struct?: StreamLiveInputRtmps): any;
export declare class StreamLiveInputRtmpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamLiveInputRtmps | undefined;
    set internalValue(value: StreamLiveInputRtmps | undefined);
    get streamKey(): any;
    get url(): any;
}
export interface StreamLiveInputRtmpsPlayback {
}
export declare function streamLiveInputRtmpsPlaybackToTerraform(struct?: StreamLiveInputRtmpsPlayback): any;
export declare function streamLiveInputRtmpsPlaybackToHclTerraform(struct?: StreamLiveInputRtmpsPlayback): any;
export declare class StreamLiveInputRtmpsPlaybackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamLiveInputRtmpsPlayback | undefined;
    set internalValue(value: StreamLiveInputRtmpsPlayback | undefined);
    get streamKey(): any;
    get url(): any;
}
export interface StreamLiveInputSrt {
}
export declare function streamLiveInputSrtToTerraform(struct?: StreamLiveInputSrt): any;
export declare function streamLiveInputSrtToHclTerraform(struct?: StreamLiveInputSrt): any;
export declare class StreamLiveInputSrtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamLiveInputSrt | undefined;
    set internalValue(value: StreamLiveInputSrt | undefined);
    get passphrase(): any;
    get streamId(): any;
    get url(): any;
}
export interface StreamLiveInputSrtPlayback {
}
export declare function streamLiveInputSrtPlaybackToTerraform(struct?: StreamLiveInputSrtPlayback): any;
export declare function streamLiveInputSrtPlaybackToHclTerraform(struct?: StreamLiveInputSrtPlayback): any;
export declare class StreamLiveInputSrtPlaybackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamLiveInputSrtPlayback | undefined;
    set internalValue(value: StreamLiveInputSrtPlayback | undefined);
    get passphrase(): any;
    get streamId(): any;
    get url(): any;
}
export interface StreamLiveInputWebRtc {
}
export declare function streamLiveInputWebRtcToTerraform(struct?: StreamLiveInputWebRtc): any;
export declare function streamLiveInputWebRtcToHclTerraform(struct?: StreamLiveInputWebRtc): any;
export declare class StreamLiveInputWebRtcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamLiveInputWebRtc | undefined;
    set internalValue(value: StreamLiveInputWebRtc | undefined);
    get url(): any;
}
export interface StreamLiveInputWebRtcPlayback {
}
export declare function streamLiveInputWebRtcPlaybackToTerraform(struct?: StreamLiveInputWebRtcPlayback): any;
export declare function streamLiveInputWebRtcPlaybackToHclTerraform(struct?: StreamLiveInputWebRtcPlayback): any;
export declare class StreamLiveInputWebRtcPlaybackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamLiveInputWebRtcPlayback | undefined;
    set internalValue(value: StreamLiveInputWebRtcPlayback | undefined);
    get url(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input cloudflare_stream_live_input}
*/
export declare class StreamLiveInput extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_stream_live_input";
    /**
    * Generates CDKTF code for importing a StreamLiveInput resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamLiveInput to import
    * @param importFromId The id of the existing StreamLiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamLiveInput to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_live_input cloudflare_stream_live_input} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamLiveInputConfig = {}
    */
    constructor(scope: Construct, id: string, config?: StreamLiveInputConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get created(): any;
    private _defaultCreator?;
    get defaultCreator(): string;
    set defaultCreator(value: string);
    resetDefaultCreator(): void;
    get defaultCreatorInput(): string;
    private _deleteRecordingAfterDays?;
    get deleteRecordingAfterDays(): number;
    set deleteRecordingAfterDays(value: number);
    resetDeleteRecordingAfterDays(): void;
    get deleteRecordingAfterDaysInput(): number;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _liveInputIdentifier?;
    get liveInputIdentifier(): string;
    set liveInputIdentifier(value: string);
    resetLiveInputIdentifier(): void;
    get liveInputIdentifierInput(): string;
    private _meta?;
    get meta(): string;
    set meta(value: string);
    resetMeta(): void;
    get metaInput(): string;
    get modified(): any;
    private _recording;
    get recording(): StreamLiveInputRecordingOutputReference;
    putRecording(value: StreamLiveInputRecording): void;
    resetRecording(): void;
    get recordingInput(): any;
    private _rtmps;
    get rtmps(): StreamLiveInputRtmpsOutputReference;
    private _rtmpsPlayback;
    get rtmpsPlayback(): StreamLiveInputRtmpsPlaybackOutputReference;
    private _srt;
    get srt(): StreamLiveInputSrtOutputReference;
    private _srtPlayback;
    get srtPlayback(): StreamLiveInputSrtPlaybackOutputReference;
    get status(): any;
    get uid(): any;
    private _webRtc;
    get webRtc(): StreamLiveInputWebRtcOutputReference;
    private _webRtcPlayback;
    get webRtcPlayback(): StreamLiveInputWebRtcPlaybackOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
