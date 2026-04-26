import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAiSearchTokensConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_tokens#account_id DataCloudflareAiSearchTokens#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_tokens#max_items DataCloudflareAiSearchTokens#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filter tokens whose name contains this string (case-insensitive).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_tokens#search DataCloudflareAiSearchTokens#search}
    */
    readonly search?: string;
}
export interface DataCloudflareAiSearchTokensResult {
}
export declare function dataCloudflareAiSearchTokensResultToTerraform(struct?: DataCloudflareAiSearchTokensResult): any;
export declare function dataCloudflareAiSearchTokensResultToHclTerraform(struct?: DataCloudflareAiSearchTokensResult): any;
export declare class DataCloudflareAiSearchTokensResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiSearchTokensResult | undefined;
    set internalValue(value: DataCloudflareAiSearchTokensResult | undefined);
    get cfApiId(): any;
    get createdAt(): any;
    get createdBy(): any;
    get enabled(): any;
    get id(): any;
    get legacy(): any;
    get modifiedAt(): any;
    get modifiedBy(): any;
    get name(): any;
}
export declare class DataCloudflareAiSearchTokensResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiSearchTokensResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_tokens cloudflare_ai_search_tokens}
*/
export declare class DataCloudflareAiSearchTokens extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_ai_search_tokens";
    /**
    * Generates CDKTF code for importing a DataCloudflareAiSearchTokens resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiSearchTokens to import
    * @param importFromId The id of the existing DataCloudflareAiSearchTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_tokens#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiSearchTokens to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_tokens cloudflare_ai_search_tokens} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiSearchTokensConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAiSearchTokensConfig);
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
    get result(): DataCloudflareAiSearchTokensResultList;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
