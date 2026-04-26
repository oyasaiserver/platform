import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSnippetListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippet_list#max_items DataCloudflareSnippetList#max_items}
    */
    readonly maxItems?: number;
    /**
    * Use this field to specify the unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippet_list#zone_id DataCloudflareSnippetList#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareSnippetListResult {
}
export declare function dataCloudflareSnippetListResultToTerraform(struct?: DataCloudflareSnippetListResult): any;
export declare function dataCloudflareSnippetListResultToHclTerraform(struct?: DataCloudflareSnippetListResult): any;
export declare class DataCloudflareSnippetListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareSnippetListResult | undefined;
    set internalValue(value: DataCloudflareSnippetListResult | undefined);
    get createdOn(): any;
    get modifiedOn(): any;
    get snippetName(): any;
}
export declare class DataCloudflareSnippetListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareSnippetListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippet_list cloudflare_snippet_list}
*/
export declare class DataCloudflareSnippetList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_snippet_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareSnippetList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSnippetList to import
    * @param importFromId The id of the existing DataCloudflareSnippetList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippet_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSnippetList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/snippet_list cloudflare_snippet_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSnippetListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareSnippetListConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareSnippetListResultList;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
