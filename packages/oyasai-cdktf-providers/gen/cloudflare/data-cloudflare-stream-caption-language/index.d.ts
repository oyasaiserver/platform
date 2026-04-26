import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareStreamCaptionLanguageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_caption_language#account_id DataCloudflareStreamCaptionLanguage#account_id}
    */
    readonly accountId?: string;
    /**
    * A Cloudflare-generated unique identifier for a media item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_caption_language#identifier DataCloudflareStreamCaptionLanguage#identifier}
    */
    readonly identifier: string;
    /**
    * The language tag in BCP 47 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_caption_language#language DataCloudflareStreamCaptionLanguage#language}
    */
    readonly language: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_caption_language cloudflare_stream_caption_language}
*/
export declare class DataCloudflareStreamCaptionLanguage extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_stream_caption_language";
    /**
    * Generates CDKTF code for importing a DataCloudflareStreamCaptionLanguage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreamCaptionLanguage to import
    * @param importFromId The id of the existing DataCloudflareStreamCaptionLanguage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_caption_language#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreamCaptionLanguage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_caption_language cloudflare_stream_caption_language} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamCaptionLanguageConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareStreamCaptionLanguageConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
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
