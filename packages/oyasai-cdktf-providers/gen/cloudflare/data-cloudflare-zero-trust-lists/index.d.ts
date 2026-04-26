import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustListsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_lists#account_id DataCloudflareZeroTrustLists#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_lists#max_items DataCloudflareZeroTrustLists#max_items}
    */
    readonly maxItems?: number;
    /**
    * Specify the list type.
    * Available values: "SERIAL", "URL", "DOMAIN", "EMAIL", "IP", "CATEGORY", "LOCATION", "DEVICE", "AAGUID".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_lists#type DataCloudflareZeroTrustLists#type}
    */
    readonly type?: string;
}
export interface DataCloudflareZeroTrustListsResultItems {
}
export declare function dataCloudflareZeroTrustListsResultItemsToTerraform(struct?: DataCloudflareZeroTrustListsResultItems): any;
export declare function dataCloudflareZeroTrustListsResultItemsToHclTerraform(struct?: DataCloudflareZeroTrustListsResultItems): any;
export declare class DataCloudflareZeroTrustListsResultItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustListsResultItems | undefined;
    set internalValue(value: DataCloudflareZeroTrustListsResultItems | undefined);
    get createdAt(): any;
    get description(): any;
    get value(): any;
}
export declare class DataCloudflareZeroTrustListsResultItemsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustListsResultItemsOutputReference;
}
export interface DataCloudflareZeroTrustListsResult {
}
export declare function dataCloudflareZeroTrustListsResultToTerraform(struct?: DataCloudflareZeroTrustListsResult): any;
export declare function dataCloudflareZeroTrustListsResultToHclTerraform(struct?: DataCloudflareZeroTrustListsResult): any;
export declare class DataCloudflareZeroTrustListsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustListsResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustListsResult | undefined);
    get createdAt(): any;
    get description(): any;
    get id(): any;
    private _items;
    get items(): DataCloudflareZeroTrustListsResultItemsList;
    get listCount(): any;
    get name(): any;
    get type(): any;
    get updatedAt(): any;
}
export declare class DataCloudflareZeroTrustListsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustListsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_lists cloudflare_zero_trust_lists}
*/
export declare class DataCloudflareZeroTrustLists extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_lists";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustLists resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustLists to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustLists that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_lists#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustLists to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_lists cloudflare_zero_trust_lists} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustListsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustListsConfig);
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
    get result(): DataCloudflareZeroTrustListsResultList;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
