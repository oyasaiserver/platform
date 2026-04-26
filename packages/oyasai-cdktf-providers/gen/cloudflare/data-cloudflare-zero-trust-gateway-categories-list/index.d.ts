import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustGatewayCategoriesListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Provide the identifier string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_categories_list#account_id DataCloudflareZeroTrustGatewayCategoriesList#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_categories_list#max_items DataCloudflareZeroTrustGatewayCategoriesList#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories {
}
export declare function dataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesToTerraform(struct?: DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories): any;
export declare function dataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesToHclTerraform(struct?: DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories): any;
export declare class DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories | undefined);
    get beta(): any;
    get class(): any;
    get description(): any;
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference;
}
export interface DataCloudflareZeroTrustGatewayCategoriesListResult {
}
export declare function dataCloudflareZeroTrustGatewayCategoriesListResultToTerraform(struct?: DataCloudflareZeroTrustGatewayCategoriesListResult): any;
export declare function dataCloudflareZeroTrustGatewayCategoriesListResultToHclTerraform(struct?: DataCloudflareZeroTrustGatewayCategoriesListResult): any;
export declare class DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustGatewayCategoriesListResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustGatewayCategoriesListResult | undefined);
    get beta(): any;
    get class(): any;
    get description(): any;
    get id(): any;
    get name(): any;
    private _subcategories;
    get subcategories(): DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList;
}
export declare class DataCloudflareZeroTrustGatewayCategoriesListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_categories_list cloudflare_zero_trust_gateway_categories_list}
*/
export declare class DataCloudflareZeroTrustGatewayCategoriesList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_gateway_categories_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayCategoriesList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayCategoriesList to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayCategoriesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_categories_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayCategoriesList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_categories_list cloudflare_zero_trust_gateway_categories_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayCategoriesListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustGatewayCategoriesListConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareZeroTrustGatewayCategoriesListResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
