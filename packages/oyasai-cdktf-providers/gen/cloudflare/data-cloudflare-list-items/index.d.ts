import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareListItemsAConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items#account_id DataCloudflareListItemsA#account_id}
    */
    readonly accountId?: string;
    /**
    * The unique ID of the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items#list_id DataCloudflareListItemsA#list_id}
    */
    readonly listId: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items#max_items DataCloudflareListItemsA#max_items}
    */
    readonly maxItems?: number;
    /**
    * Amount of results to include in each paginated response. A non-negative 32 bit integer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items#per_page DataCloudflareListItemsA#per_page}
    */
    readonly perPage?: number;
    /**
    * A search query to filter returned items. Its meaning depends on the list type: IP addresses must start with the provided string, hostnames and bulk redirects must contain the string, and ASNs must match the string exactly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items#search DataCloudflareListItemsA#search}
    */
    readonly search?: string;
}
export interface DataCloudflareListItemsResultHostname {
}
export declare function dataCloudflareListItemsResultHostnameToTerraform(struct?: DataCloudflareListItemsResultHostname): any;
export declare function dataCloudflareListItemsResultHostnameToHclTerraform(struct?: DataCloudflareListItemsResultHostname): any;
export declare class DataCloudflareListItemsResultHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareListItemsResultHostname | undefined;
    set internalValue(value: DataCloudflareListItemsResultHostname | undefined);
    get excludeExactHostname(): any;
    get urlHostname(): any;
}
export interface DataCloudflareListItemsResultRedirect {
}
export declare function dataCloudflareListItemsResultRedirectToTerraform(struct?: DataCloudflareListItemsResultRedirect): any;
export declare function dataCloudflareListItemsResultRedirectToHclTerraform(struct?: DataCloudflareListItemsResultRedirect): any;
export declare class DataCloudflareListItemsResultRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareListItemsResultRedirect | undefined;
    set internalValue(value: DataCloudflareListItemsResultRedirect | undefined);
    get includeSubdomains(): any;
    get preservePathSuffix(): any;
    get preserveQueryString(): any;
    get sourceUrl(): any;
    get statusCode(): any;
    get subpathMatching(): any;
    get targetUrl(): any;
}
export interface DataCloudflareListItemsResult {
}
export declare function dataCloudflareListItemsResultToTerraform(struct?: DataCloudflareListItemsResult): any;
export declare function dataCloudflareListItemsResultToHclTerraform(struct?: DataCloudflareListItemsResult): any;
export declare class DataCloudflareListItemsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareListItemsResult | undefined;
    set internalValue(value: DataCloudflareListItemsResult | undefined);
    get asn(): any;
    get comment(): any;
    get createdOn(): any;
    private _hostname;
    get hostname(): DataCloudflareListItemsResultHostnameOutputReference;
    get id(): any;
    get ip(): any;
    get modifiedOn(): any;
    private _redirect;
    get redirect(): DataCloudflareListItemsResultRedirectOutputReference;
}
export declare class DataCloudflareListItemsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareListItemsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items cloudflare_list_items}
*/
export declare class DataCloudflareListItemsA extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_list_items";
    /**
    * Generates CDKTF code for importing a DataCloudflareListItemsA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareListItemsA to import
    * @param importFromId The id of the existing DataCloudflareListItemsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareListItemsA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list_items cloudflare_list_items} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareListItemsAConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareListItemsAConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _listId?;
    get listId(): string;
    set listId(value: string);
    get listIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _perPage?;
    get perPage(): number;
    set perPage(value: number);
    resetPerPage(): void;
    get perPageInput(): number;
    private _result;
    get result(): DataCloudflareListItemsResultList;
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
