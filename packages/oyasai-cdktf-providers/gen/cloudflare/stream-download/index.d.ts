import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StreamDownloadConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_download#account_id StreamDownload#account_id}
    */
    readonly accountId?: string;
    /**
    * A Cloudflare-generated unique identifier for a media item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_download#identifier StreamDownload#identifier}
    */
    readonly identifier: string;
}
export interface StreamDownloadAudio {
}
export declare function streamDownloadAudioToTerraform(struct?: StreamDownloadAudio): any;
export declare function streamDownloadAudioToHclTerraform(struct?: StreamDownloadAudio): any;
export declare class StreamDownloadAudioOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamDownloadAudio | undefined;
    set internalValue(value: StreamDownloadAudio | undefined);
    get percentComplete(): any;
    get status(): any;
    get url(): any;
}
export interface StreamDownloadDefault {
}
export declare function streamDownloadDefaultToTerraform(struct?: StreamDownloadDefault): any;
export declare function streamDownloadDefaultToHclTerraform(struct?: StreamDownloadDefault): any;
export declare class StreamDownloadDefaultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StreamDownloadDefault | undefined;
    set internalValue(value: StreamDownloadDefault | undefined);
    get percentComplete(): any;
    get status(): any;
    get url(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_download cloudflare_stream_download}
*/
export declare class StreamDownload extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_stream_download";
    /**
    * Generates CDKTF code for importing a StreamDownload resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamDownload to import
    * @param importFromId The id of the existing StreamDownload that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_download#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamDownload to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_download cloudflare_stream_download} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamDownloadConfig
    */
    constructor(scope: Construct, id: string, config: StreamDownloadConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _audio;
    get audio(): StreamDownloadAudioOutputReference;
    private _default;
    get default(): StreamDownloadDefaultOutputReference;
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
