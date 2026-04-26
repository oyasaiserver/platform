import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCloudforceOneRequestsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#account_id DataCloudflareCloudforceOneRequests#account_id}
    */
    readonly accountId?: string;
    /**
    * Retrieve requests completed after this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#completed_after DataCloudflareCloudforceOneRequests#completed_after}
    */
    readonly completedAfter?: string;
    /**
    * Retrieve requests completed before this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#completed_before DataCloudflareCloudforceOneRequests#completed_before}
    */
    readonly completedBefore?: string;
    /**
    * Retrieve requests created after this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#created_after DataCloudflareCloudforceOneRequests#created_after}
    */
    readonly createdAfter?: string;
    /**
    * Retrieve requests created before this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#created_before DataCloudflareCloudforceOneRequests#created_before}
    */
    readonly createdBefore?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#max_items DataCloudflareCloudforceOneRequests#max_items}
    */
    readonly maxItems?: number;
    /**
    * Page number of results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#page DataCloudflareCloudforceOneRequests#page}
    */
    readonly page: number;
    /**
    * Number of results per page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#per_page DataCloudflareCloudforceOneRequests#per_page}
    */
    readonly perPage: number;
    /**
    * Requested information from request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#request_type DataCloudflareCloudforceOneRequests#request_type}
    */
    readonly requestType?: string;
    /**
    * Field to sort results by.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#sort_by DataCloudflareCloudforceOneRequests#sort_by}
    */
    readonly sortBy?: string;
    /**
    * Sort order (asc or desc).
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#sort_order DataCloudflareCloudforceOneRequests#sort_order}
    */
    readonly sortOrder?: string;
    /**
    * Request Status.
    * Available values: "open", "accepted", "reported", "approved", "completed", "declined".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#status DataCloudflareCloudforceOneRequests#status}
    */
    readonly status?: string;
}
export interface DataCloudflareCloudforceOneRequestsResult {
}
export declare function dataCloudflareCloudforceOneRequestsResultToTerraform(struct?: DataCloudflareCloudforceOneRequestsResult): any;
export declare function dataCloudflareCloudforceOneRequestsResultToHclTerraform(struct?: DataCloudflareCloudforceOneRequestsResult): any;
export declare class DataCloudflareCloudforceOneRequestsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCloudforceOneRequestsResult | undefined;
    set internalValue(value: DataCloudflareCloudforceOneRequestsResult | undefined);
    get completed(): any;
    get created(): any;
    get id(): any;
    get messageTokens(): any;
    get priority(): any;
    get readableId(): any;
    get request(): any;
    get status(): any;
    get summary(): any;
    get tlp(): any;
    get tokens(): any;
    get updated(): any;
}
export declare class DataCloudflareCloudforceOneRequestsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCloudforceOneRequestsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests cloudflare_cloudforce_one_requests}
*/
export declare class DataCloudflareCloudforceOneRequests extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_cloudforce_one_requests";
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequests to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequests to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests cloudflare_cloudforce_one_requests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareCloudforceOneRequestsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _completedAfter?;
    get completedAfter(): string;
    set completedAfter(value: string);
    resetCompletedAfter(): void;
    get completedAfterInput(): string;
    private _completedBefore?;
    get completedBefore(): string;
    set completedBefore(value: string);
    resetCompletedBefore(): void;
    get completedBeforeInput(): string;
    private _createdAfter?;
    get createdAfter(): string;
    set createdAfter(value: string);
    resetCreatedAfter(): void;
    get createdAfterInput(): string;
    private _createdBefore?;
    get createdBefore(): string;
    set createdBefore(value: string);
    resetCreatedBefore(): void;
    get createdBeforeInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _page?;
    get page(): number;
    set page(value: number);
    get pageInput(): number;
    private _perPage?;
    get perPage(): number;
    set perPage(value: number);
    get perPageInput(): number;
    private _requestType?;
    get requestType(): string;
    set requestType(value: string);
    resetRequestType(): void;
    get requestTypeInput(): string;
    private _result;
    get result(): DataCloudflareCloudforceOneRequestsResultList;
    private _sortBy?;
    get sortBy(): string;
    set sortBy(value: string);
    resetSortBy(): void;
    get sortByInput(): string;
    private _sortOrder?;
    get sortOrder(): string;
    set sortOrder(value: string);
    resetSortOrder(): void;
    get sortOrderInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
