import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareImageVariantConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image_variant#account_id DataCloudflareImageVariant#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image_variant#variant_id DataCloudflareImageVariant#variant_id}
    */
    readonly variantId: string;
}
export interface DataCloudflareImageVariantVariantOptions {
}
export declare function dataCloudflareImageVariantVariantOptionsToTerraform(struct?: DataCloudflareImageVariantVariantOptions): any;
export declare function dataCloudflareImageVariantVariantOptionsToHclTerraform(struct?: DataCloudflareImageVariantVariantOptions): any;
export declare class DataCloudflareImageVariantVariantOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareImageVariantVariantOptions | undefined;
    set internalValue(value: DataCloudflareImageVariantVariantOptions | undefined);
    get fit(): any;
    get height(): any;
    get metadata(): any;
    get width(): any;
}
export interface DataCloudflareImageVariantVariant {
}
export declare function dataCloudflareImageVariantVariantToTerraform(struct?: DataCloudflareImageVariantVariant): any;
export declare function dataCloudflareImageVariantVariantToHclTerraform(struct?: DataCloudflareImageVariantVariant): any;
export declare class DataCloudflareImageVariantVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareImageVariantVariant | undefined;
    set internalValue(value: DataCloudflareImageVariantVariant | undefined);
    get id(): any;
    get neverRequireSignedUrls(): any;
    private _options;
    get options(): DataCloudflareImageVariantVariantOptionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image_variant cloudflare_image_variant}
*/
export declare class DataCloudflareImageVariant extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_image_variant";
    /**
    * Generates CDKTF code for importing a DataCloudflareImageVariant resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareImageVariant to import
    * @param importFromId The id of the existing DataCloudflareImageVariant that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image_variant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareImageVariant to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image_variant cloudflare_image_variant} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareImageVariantConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareImageVariantConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    private _variant;
    get variant(): DataCloudflareImageVariantVariantOutputReference;
    private _variantId?;
    get variantId(): string;
    set variantId(value: string);
    get variantIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
