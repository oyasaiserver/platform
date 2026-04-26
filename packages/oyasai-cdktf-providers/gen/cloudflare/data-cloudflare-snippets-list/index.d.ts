import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSnippetsListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippets_list#max_items DataCloudflareSnippetsList#max_items}
    */
    readonly maxItems?: number;
    /**
    * The unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippets_list#zone_id DataCloudflareSnippetsList#zone_id}
    */
    readonly zoneId: string;
}
export interface DataCloudflareSnippetsListResult {
}
export declare function dataCloudflareSnippetsListResultToTerraform(struct?: DataCloudflareSnippetsListResult): any;
export declare function dataCloudflareSnippetsListResultToHclTerraform(struct?: DataCloudflareSnippetsListResult): any;
export declare class DataCloudflareSnippetsListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareSnippetsListResult | undefined;
    set internalValue(value: DataCloudflareSnippetsListResult | undefined);
    get createdOn(): any;
    get modifiedOn(): any;
    get snippetName(): any;
}
export declare class DataCloudflareSnippetsListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareSnippetsListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippets_list cloudflare_snippets_list}
*/
export declare class DataCloudflareSnippetsList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_snippets_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareSnippetsList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSnippetsList to import
    * @param importFromId The id of the existing DataCloudflareSnippetsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippets_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSnippetsList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippets_list cloudflare_snippets_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSnippetsListConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareSnippetsListConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareSnippetsListResultList;
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
