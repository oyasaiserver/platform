import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareListsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/lists#account_id DataCloudflareLists#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/lists#max_items DataCloudflareLists#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareListsResult {
}
export declare function dataCloudflareListsResultToTerraform(struct?: DataCloudflareListsResult): any;
export declare function dataCloudflareListsResultToHclTerraform(struct?: DataCloudflareListsResult): any;
export declare class DataCloudflareListsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareListsResult | undefined;
    set internalValue(value: DataCloudflareListsResult | undefined);
    get createdOn(): any;
    get description(): any;
    get id(): any;
    get kind(): any;
    get modifiedOn(): any;
    get name(): any;
    get numItems(): any;
    get numReferencingFilters(): any;
}
export declare class DataCloudflareListsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareListsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/lists cloudflare_lists}
*/
export declare class DataCloudflareLists extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_lists";
    /**
    * Generates CDKTF code for importing a DataCloudflareLists resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLists to import
    * @param importFromId The id of the existing DataCloudflareLists that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/lists#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLists to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/lists cloudflare_lists} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareListsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareListsConfig);
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
    get result(): DataCloudflareListsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
