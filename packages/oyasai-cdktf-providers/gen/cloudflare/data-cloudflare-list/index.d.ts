import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareListConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list#account_id DataCloudflareList#account_id}
    */
    readonly accountId?: string;
    /**
    * The unique ID of the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list#list_id DataCloudflareList#list_id}
    */
    readonly listId: string;
    /**
    *  A search query to filter returned items. Its meaning depends on the list type: IP addresses must start with the provided string, hostnames and bulk redirects must contain the string, and ASNs must match the string exactly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list#search DataCloudflareList#search}
    */
    readonly search?: string;
}
export interface DataCloudflareListItemsHostname {
}
export declare function dataCloudflareListItemsHostnameToTerraform(struct?: DataCloudflareListItemsHostname): any;
export declare function dataCloudflareListItemsHostnameToHclTerraform(struct?: DataCloudflareListItemsHostname): any;
export declare class DataCloudflareListItemsHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareListItemsHostname | undefined;
    set internalValue(value: DataCloudflareListItemsHostname | undefined);
    get excludeExactHostname(): any;
    get urlHostname(): any;
}
export interface DataCloudflareListItemsRedirect {
}
export declare function dataCloudflareListItemsRedirectToTerraform(struct?: DataCloudflareListItemsRedirect): any;
export declare function dataCloudflareListItemsRedirectToHclTerraform(struct?: DataCloudflareListItemsRedirect): any;
export declare class DataCloudflareListItemsRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareListItemsRedirect | undefined;
    set internalValue(value: DataCloudflareListItemsRedirect | undefined);
    get includeSubdomains(): any;
    get preservePathSuffix(): any;
    get preserveQueryString(): any;
    get sourceUrl(): any;
    get statusCode(): any;
    get subpathMatching(): any;
    get targetUrl(): any;
}
export interface DataCloudflareListItems {
}
export declare function dataCloudflareListItemsToTerraform(struct?: DataCloudflareListItems): any;
export declare function dataCloudflareListItemsToHclTerraform(struct?: DataCloudflareListItems): any;
export declare class DataCloudflareListItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareListItems | undefined;
    set internalValue(value: DataCloudflareListItems | undefined);
    get asn(): any;
    get comment(): any;
    private _hostname;
    get hostname(): DataCloudflareListItemsHostnameOutputReference;
    get ip(): any;
    private _redirect;
    get redirect(): DataCloudflareListItemsRedirectOutputReference;
}
export declare class DataCloudflareListItemsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareListItemsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list cloudflare_list}
*/
export declare class DataCloudflareList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_list";
    /**
    * Generates CDKTF code for importing a DataCloudflareList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareList to import
    * @param importFromId The id of the existing DataCloudflareList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/list cloudflare_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareListConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareListConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdOn(): any;
    get description(): any;
    get id(): any;
    private _items;
    get items(): DataCloudflareListItemsList;
    get kind(): any;
    private _listId?;
    get listId(): string;
    set listId(value: string);
    get listIdInput(): string;
    get modifiedOn(): any;
    get name(): any;
    get numItems(): any;
    get numReferencingFilters(): any;
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
