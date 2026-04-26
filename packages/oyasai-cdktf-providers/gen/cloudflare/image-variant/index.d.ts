import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImageVariantConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#account_id ImageVariant#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#id ImageVariant#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Indicates whether the variant can access an image without a signature, regardless of image access control.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#never_require_signed_urls ImageVariant#never_require_signed_urls}
    */
    readonly neverRequireSignedUrls?: boolean | cdktf.IResolvable;
    /**
    * Allows you to define image resizing sizes for different use cases.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#options ImageVariant#options}
    */
    readonly options: ImageVariantOptions;
}
export interface ImageVariantOptions {
    /**
    * The fit property describes how the width and height dimensions should be interpreted.
    * Available values: "scale-down", "contain", "cover", "crop", "pad".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#fit ImageVariant#fit}
    */
    readonly fit: string;
    /**
    * Maximum height in image pixels.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#height ImageVariant#height}
    */
    readonly height: number;
    /**
    * What EXIF data should be preserved in the output image.
    * Available values: "keep", "copyright", "none".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#metadata ImageVariant#metadata}
    */
    readonly metadata: string;
    /**
    * Maximum width in image pixels.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#width ImageVariant#width}
    */
    readonly width: number;
}
export declare function imageVariantOptionsToTerraform(struct?: ImageVariantOptions | cdktf.IResolvable): any;
export declare function imageVariantOptionsToHclTerraform(struct?: ImageVariantOptions | cdktf.IResolvable): any;
export declare class ImageVariantOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImageVariantOptions | cdktf.IResolvable | undefined;
    set internalValue(value: ImageVariantOptions | cdktf.IResolvable | undefined);
    private _fit?;
    get fit(): string;
    set fit(value: string);
    get fitInput(): string;
    private _height?;
    get height(): number;
    set height(value: number);
    get heightInput(): number;
    private _metadata?;
    get metadata(): string;
    set metadata(value: string);
    get metadataInput(): string;
    private _width?;
    get width(): number;
    set width(value: number);
    get widthInput(): number;
}
export interface ImageVariantVariantOptions {
}
export declare function imageVariantVariantOptionsToTerraform(struct?: ImageVariantVariantOptions): any;
export declare function imageVariantVariantOptionsToHclTerraform(struct?: ImageVariantVariantOptions): any;
export declare class ImageVariantVariantOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImageVariantVariantOptions | undefined;
    set internalValue(value: ImageVariantVariantOptions | undefined);
    get fit(): any;
    get height(): any;
    get metadata(): any;
    get width(): any;
}
export interface ImageVariantVariant {
}
export declare function imageVariantVariantToTerraform(struct?: ImageVariantVariant): any;
export declare function imageVariantVariantToHclTerraform(struct?: ImageVariantVariant): any;
export declare class ImageVariantVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImageVariantVariant | undefined;
    set internalValue(value: ImageVariantVariant | undefined);
    get id(): any;
    get neverRequireSignedUrls(): any;
    private _options;
    get options(): ImageVariantVariantOptionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant cloudflare_image_variant}
*/
export declare class ImageVariant extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_image_variant";
    /**
    * Generates CDKTF code for importing a ImageVariant resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImageVariant to import
    * @param importFromId The id of the existing ImageVariant that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImageVariant to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant cloudflare_image_variant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImageVariantConfig
    */
    constructor(scope: Construct, id: string, config: ImageVariantConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _neverRequireSignedUrls?;
    get neverRequireSignedUrls(): boolean | cdktf.IResolvable;
    set neverRequireSignedUrls(value: boolean | cdktf.IResolvable);
    resetNeverRequireSignedUrls(): void;
    get neverRequireSignedUrlsInput(): any;
    private _options;
    get options(): ImageVariantOptionsOutputReference;
    putOptions(value: ImageVariantOptions): void;
    get optionsInput(): any;
    private _variant;
    get variant(): ImageVariantVariantOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
