import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StreamAudioTrackConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_audio_track#account_id StreamAudioTrack#account_id}
    */
    readonly accountId?: string;
    /**
    * The unique identifier for an additional audio track.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_audio_track#audio_identifier StreamAudioTrack#audio_identifier}
    */
    readonly audioIdentifier?: string;
    /**
    * Denotes whether the audio track will be played by default in a player.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_audio_track#default StreamAudioTrack#default}
    */
    readonly default?: boolean | cdktf.IResolvable;
    /**
    * A Cloudflare-generated unique identifier for a media item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_audio_track#identifier StreamAudioTrack#identifier}
    */
    readonly identifier: string;
    /**
    * A string to uniquely identify the track amongst other audio track labels for the specified video.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_audio_track#label StreamAudioTrack#label}
    */
    readonly label?: string;
}
export interface StreamAudioTrackAudio {
}
export declare function streamAudioTrackAudioToTerraform(struct?: StreamAudioTrackAudio): any;
export declare function streamAudioTrackAudioToHclTerraform(struct?: StreamAudioTrackAudio): any;
export declare class StreamAudioTrackAudioOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): StreamAudioTrackAudio | undefined;
    set internalValue(value: StreamAudioTrackAudio | undefined);
    get default(): any;
    get label(): any;
    get status(): any;
    get uid(): any;
}
export declare class StreamAudioTrackAudioList extends cdktf.ComplexList {
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
    get(index: number): StreamAudioTrackAudioOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_audio_track cloudflare_stream_audio_track}
*/
export declare class StreamAudioTrack extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_stream_audio_track";
    /**
    * Generates CDKTF code for importing a StreamAudioTrack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamAudioTrack to import
    * @param importFromId The id of the existing StreamAudioTrack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_audio_track#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamAudioTrack to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_audio_track cloudflare_stream_audio_track} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamAudioTrackConfig
    */
    constructor(scope: Construct, id: string, config: StreamAudioTrackConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _audio;
    get audio(): StreamAudioTrackAudioList;
    private _audioIdentifier?;
    get audioIdentifier(): string;
    set audioIdentifier(value: string);
    resetAudioIdentifier(): void;
    get audioIdentifierInput(): string;
    private _default?;
    get default(): boolean | cdktf.IResolvable;
    set default(value: boolean | cdktf.IResolvable);
    resetDefault(): void;
    get defaultInput(): any;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    private _label?;
    get label(): string;
    set label(value: string);
    resetLabel(): void;
    get labelInput(): string;
    get status(): any;
    get uid(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
