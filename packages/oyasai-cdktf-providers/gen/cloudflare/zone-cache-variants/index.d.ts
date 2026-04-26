import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZoneCacheVariantsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Value of the zone setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#value ZoneCacheVariants#value}
    */
    readonly value: ZoneCacheVariantsValue;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}
    */
    readonly zoneId: string;
}
export interface ZoneCacheVariantsValue {
    /**
    * List of strings with the MIME types of all the variants that should be served for avif.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#avif ZoneCacheVariants#avif}
    */
    readonly avif?: string[];
    /**
    * List of strings with the MIME types of all the variants that should be served for bmp.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#bmp ZoneCacheVariants#bmp}
    */
    readonly bmp?: string[];
    /**
    * List of strings with the MIME types of all the variants that should be served for gif.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#gif ZoneCacheVariants#gif}
    */
    readonly gif?: string[];
    /**
    * List of strings with the MIME types of all the variants that should be served for jp2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#jp2 ZoneCacheVariants#jp2}
    */
    readonly jp2?: string[];
    /**
    * List of strings with the MIME types of all the variants that should be served for jpeg.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#jpeg ZoneCacheVariants#jpeg}
    */
    readonly jpeg?: string[];
    /**
    * List of strings with the MIME types of all the variants that should be served for jpg.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#jpg ZoneCacheVariants#jpg}
    */
    readonly jpg?: string[];
    /**
    * List of strings with the MIME types of all the variants that should be served for jpg2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#jpg2 ZoneCacheVariants#jpg2}
    */
    readonly jpg2?: string[];
    /**
    * List of strings with the MIME types of all the variants that should be served for png.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#png ZoneCacheVariants#png}
    */
    readonly png?: string[];
    /**
    * List of strings with the MIME types of all the variants that should be served for tif.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#tif ZoneCacheVariants#tif}
    */
    readonly tif?: string[];
    /**
    * List of strings with the MIME types of all the variants that should be served for tiff.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#tiff ZoneCacheVariants#tiff}
    */
    readonly tiff?: string[];
    /**
    * List of strings with the MIME types of all the variants that should be served for webp.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#webp ZoneCacheVariants#webp}
    */
    readonly webp?: string[];
}
export declare function zoneCacheVariantsValueToTerraform(struct?: ZoneCacheVariantsValue | cdktf.IResolvable): any;
export declare function zoneCacheVariantsValueToHclTerraform(struct?: ZoneCacheVariantsValue | cdktf.IResolvable): any;
export declare class ZoneCacheVariantsValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZoneCacheVariantsValue | cdktf.IResolvable | undefined;
    set internalValue(value: ZoneCacheVariantsValue | cdktf.IResolvable | undefined);
    private _avif?;
    get avif(): string[];
    set avif(value: string[]);
    resetAvif(): void;
    get avifInput(): string[];
    private _bmp?;
    get bmp(): string[];
    set bmp(value: string[]);
    resetBmp(): void;
    get bmpInput(): string[];
    private _gif?;
    get gif(): string[];
    set gif(value: string[]);
    resetGif(): void;
    get gifInput(): string[];
    private _jp2?;
    get jp2(): string[];
    set jp2(value: string[]);
    resetJp2(): void;
    get jp2Input(): string[];
    private _jpeg?;
    get jpeg(): string[];
    set jpeg(value: string[]);
    resetJpeg(): void;
    get jpegInput(): string[];
    private _jpg?;
    get jpg(): string[];
    set jpg(value: string[]);
    resetJpg(): void;
    get jpgInput(): string[];
    private _jpg2?;
    get jpg2(): string[];
    set jpg2(value: string[]);
    resetJpg2(): void;
    get jpg2Input(): string[];
    private _png?;
    get png(): string[];
    set png(value: string[]);
    resetPng(): void;
    get pngInput(): string[];
    private _tif?;
    get tif(): string[];
    set tif(value: string[]);
    resetTif(): void;
    get tifInput(): string[];
    private _tiff?;
    get tiff(): string[];
    set tiff(value: string[]);
    resetTiff(): void;
    get tiffInput(): string[];
    private _webp?;
    get webp(): string[];
    set webp(value: string[]);
    resetWebp(): void;
    get webpInput(): string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants}
*/
export declare class ZoneCacheVariants extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zone_cache_variants";
    /**
    * Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneCacheVariants to import
    * @param importFromId The id of the existing ZoneCacheVariants that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneCacheVariants to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneCacheVariantsConfig
    */
    constructor(scope: Construct, id: string, config: ZoneCacheVariantsConfig);
    get editable(): any;
    get id(): any;
    get modifiedOn(): any;
    private _value;
    get value(): ZoneCacheVariantsValueOutputReference;
    putValue(value: ZoneCacheVariantsValue): void;
    get valueInput(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
