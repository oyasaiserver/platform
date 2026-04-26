import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image#account_id Image#account_id}
    */
    readonly accountId?: string;
    /**
    * Can set the creator field with an internal user ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image#creator Image#creator}
    */
    readonly creator?: string;
    /**
    * An image binary data. Only needed when type is uploading a file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image#file Image#file}
    */
    readonly file?: string;
    /**
    * An optional custom unique identifier for your image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image#id Image#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * User modifiable key-value store. Can use used for keeping references to another system of record for managing images.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image#metadata Image#metadata}
    */
    readonly metadata?: string;
    /**
    * Indicates whether the image requires a signature token for the access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image#require_signed_urls Image#require_signed_urls}
    */
    readonly requireSignedUrls?: boolean | cdktf.IResolvable;
    /**
    * A URL to fetch an image from origin. Only needed when type is uploading from a URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image#url Image#url}
    */
    readonly url?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image cloudflare_image}
*/
export declare class Image extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_image";
    /**
    * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Image to import
    * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Image to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image cloudflare_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImageConfig
    */
    constructor(scope: Construct, id: string, config: ImageConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _creator?;
    get creator(): string;
    set creator(value: string);
    resetCreator(): void;
    get creatorInput(): string;
    private _file?;
    get file(): string;
    set file(value: string);
    resetFile(): void;
    get fileInput(): string;
    get filename(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get meta(): any;
    private _metadata?;
    get metadata(): string;
    set metadata(value: string);
    resetMetadata(): void;
    get metadataInput(): string;
    private _requireSignedUrls?;
    get requireSignedUrls(): boolean | cdktf.IResolvable;
    set requireSignedUrls(value: boolean | cdktf.IResolvable);
    resetRequireSignedUrls(): void;
    get requireSignedUrlsInput(): any;
    get uploaded(): any;
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string;
    get variants(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
