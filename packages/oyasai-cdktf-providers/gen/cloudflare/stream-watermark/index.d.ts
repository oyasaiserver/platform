import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StreamWatermarkAConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#account_id StreamWatermarkA#account_id}
    */
    readonly accountId?: string;
    /**
    * The unique identifier for a watermark profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#identifier StreamWatermarkA#identifier}
    */
    readonly identifier?: string;
    /**
    * A short description of the watermark profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#name StreamWatermarkA#name}
    */
    readonly name?: string;
    /**
    * The translucency of the image. A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to `1.0` will not make the image completely opaque.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#opacity StreamWatermarkA#opacity}
    */
    readonly opacity?: number;
    /**
    * The whitespace between the adjacent edges (determined by position) of the video and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded video width or length, as determined by the algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#padding StreamWatermarkA#padding}
    */
    readonly padding?: number;
    /**
    * The location of the image. Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the `padding` parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#position StreamWatermarkA#position}
    */
    readonly position?: string;
    /**
    * The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. `0.0` indicates no scaling (use the size of the image as-is), and `1.0 `fills the entire video.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#scale StreamWatermarkA#scale}
    */
    readonly scale?: number;
    /**
    * URL of the watermark image to copy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#url StreamWatermarkA#url}
    */
    readonly url?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark cloudflare_stream_watermark}
*/
export declare class StreamWatermarkA extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_stream_watermark";
    /**
    * Generates CDKTF code for importing a StreamWatermarkA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamWatermarkA to import
    * @param importFromId The id of the existing StreamWatermarkA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamWatermarkA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark cloudflare_stream_watermark} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamWatermarkAConfig = {}
    */
    constructor(scope: Construct, id: string, config?: StreamWatermarkAConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get created(): any;
    get downloadedFrom(): any;
    get height(): any;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _opacity?;
    get opacity(): number;
    set opacity(value: number);
    resetOpacity(): void;
    get opacityInput(): number;
    private _padding?;
    get padding(): number;
    set padding(value: number);
    resetPadding(): void;
    get paddingInput(): number;
    private _position?;
    get position(): string;
    set position(value: string);
    resetPosition(): void;
    get positionInput(): string;
    private _scale?;
    get scale(): number;
    set scale(value: number);
    resetScale(): void;
    get scaleInput(): number;
    get size(): any;
    get uid(): any;
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string;
    get width(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
