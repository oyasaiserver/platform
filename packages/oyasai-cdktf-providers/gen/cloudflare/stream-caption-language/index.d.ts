import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StreamCaptionLanguageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language#account_id StreamCaptionLanguage#account_id}
    */
    readonly accountId?: string;
    /**
    * The WebVTT file containing the caption or subtitle content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language#file StreamCaptionLanguage#file}
    */
    readonly file?: string;
    /**
    * A Cloudflare-generated unique identifier for a media item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language#identifier StreamCaptionLanguage#identifier}
    */
    readonly identifier: string;
    /**
    * The language tag in BCP 47 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language#language StreamCaptionLanguage#language}
    */
    readonly language: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language cloudflare_stream_caption_language}
*/
export declare class StreamCaptionLanguage extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_stream_caption_language";
    /**
    * Generates CDKTF code for importing a StreamCaptionLanguage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamCaptionLanguage to import
    * @param importFromId The id of the existing StreamCaptionLanguage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamCaptionLanguage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language cloudflare_stream_caption_language} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamCaptionLanguageConfig
    */
    constructor(scope: Construct, id: string, config: StreamCaptionLanguageConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _file?;
    get file(): string;
    set file(value: string);
    resetFile(): void;
    get fileInput(): string;
    get generated(): any;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    get label(): any;
    private _language?;
    get language(): string;
    set language(value: string);
    get languageInput(): string;
    get status(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
