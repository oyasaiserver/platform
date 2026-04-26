import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareImagesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/images#account_id DataCloudflareImages#account_id}
    */
    readonly accountId?: string;
    /**
    * Internal user ID set within the creator field. Setting to empty string "" will return images where creator field is not set
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/images#creator DataCloudflareImages#creator}
    */
    readonly creator?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/images#max_items DataCloudflareImages#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareImagesResultImages {
}
export declare function dataCloudflareImagesResultImagesToTerraform(struct?: DataCloudflareImagesResultImages): any;
export declare function dataCloudflareImagesResultImagesToHclTerraform(struct?: DataCloudflareImagesResultImages): any;
export declare class DataCloudflareImagesResultImagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareImagesResultImages | undefined;
    set internalValue(value: DataCloudflareImagesResultImages | undefined);
    get creator(): any;
    get filename(): any;
    get id(): any;
    get meta(): any;
    get requireSignedUrls(): any;
    get uploaded(): any;
    get variants(): any;
}
export declare class DataCloudflareImagesResultImagesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareImagesResultImagesOutputReference;
}
export interface DataCloudflareImagesResult {
}
export declare function dataCloudflareImagesResultToTerraform(struct?: DataCloudflareImagesResult): any;
export declare function dataCloudflareImagesResultToHclTerraform(struct?: DataCloudflareImagesResult): any;
export declare class DataCloudflareImagesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareImagesResult | undefined;
    set internalValue(value: DataCloudflareImagesResult | undefined);
    private _images;
    get images(): DataCloudflareImagesResultImagesList;
}
export declare class DataCloudflareImagesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareImagesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/images cloudflare_images}
*/
export declare class DataCloudflareImages extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_images";
    /**
    * Generates CDKTF code for importing a DataCloudflareImages resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareImages to import
    * @param importFromId The id of the existing DataCloudflareImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/images#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareImages to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/images cloudflare_images} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareImagesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareImagesConfig);
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
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareImagesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
