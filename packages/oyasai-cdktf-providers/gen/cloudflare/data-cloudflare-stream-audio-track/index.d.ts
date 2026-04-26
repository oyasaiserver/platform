import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareStreamAudioTrackConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_audio_track#account_id DataCloudflareStreamAudioTrack#account_id}
    */
    readonly accountId?: string;
    /**
    * A Cloudflare-generated unique identifier for a media item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_audio_track#identifier DataCloudflareStreamAudioTrack#identifier}
    */
    readonly identifier: string;
}
export interface DataCloudflareStreamAudioTrackAudio {
}
export declare function dataCloudflareStreamAudioTrackAudioToTerraform(struct?: DataCloudflareStreamAudioTrackAudio): any;
export declare function dataCloudflareStreamAudioTrackAudioToHclTerraform(struct?: DataCloudflareStreamAudioTrackAudio): any;
export declare class DataCloudflareStreamAudioTrackAudioOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareStreamAudioTrackAudio | undefined;
    set internalValue(value: DataCloudflareStreamAudioTrackAudio | undefined);
    get default(): any;
    get label(): any;
    get status(): any;
    get uid(): any;
}
export declare class DataCloudflareStreamAudioTrackAudioList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareStreamAudioTrackAudioOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_audio_track cloudflare_stream_audio_track}
*/
export declare class DataCloudflareStreamAudioTrack extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_stream_audio_track";
    /**
    * Generates CDKTF code for importing a DataCloudflareStreamAudioTrack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreamAudioTrack to import
    * @param importFromId The id of the existing DataCloudflareStreamAudioTrack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_audio_track#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreamAudioTrack to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_audio_track cloudflare_stream_audio_track} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamAudioTrackConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareStreamAudioTrackConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _audio;
    get audio(): DataCloudflareStreamAudioTrackAudioList;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
