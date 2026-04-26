import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCloudforceOneRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#account_id DataCloudflareCloudforceOneRequest#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#filter DataCloudflareCloudforceOneRequest#filter}
    */
    readonly filter?: DataCloudflareCloudforceOneRequestFilter;
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#request_id DataCloudflareCloudforceOneRequest#request_id}
    */
    readonly requestId?: string;
}
export interface DataCloudflareCloudforceOneRequestFilter {
    /**
    * Retrieve requests completed after this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#completed_after DataCloudflareCloudforceOneRequest#completed_after}
    */
    readonly completedAfter?: string;
    /**
    * Retrieve requests completed before this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#completed_before DataCloudflareCloudforceOneRequest#completed_before}
    */
    readonly completedBefore?: string;
    /**
    * Retrieve requests created after this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#created_after DataCloudflareCloudforceOneRequest#created_after}
    */
    readonly createdAfter?: string;
    /**
    * Retrieve requests created before this time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#created_before DataCloudflareCloudforceOneRequest#created_before}
    */
    readonly createdBefore?: string;
    /**
    * Page number of results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#page DataCloudflareCloudforceOneRequest#page}
    */
    readonly page: number;
    /**
    * Number of results per page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#per_page DataCloudflareCloudforceOneRequest#per_page}
    */
    readonly perPage: number;
    /**
    * Requested information from request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#request_type DataCloudflareCloudforceOneRequest#request_type}
    */
    readonly requestType?: string;
    /**
    * Field to sort results by.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#sort_by DataCloudflareCloudforceOneRequest#sort_by}
    */
    readonly sortBy?: string;
    /**
    * Sort order (asc or desc).
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#sort_order DataCloudflareCloudforceOneRequest#sort_order}
    */
    readonly sortOrder?: string;
    /**
    * Request Status.
    * Available values: "open", "accepted", "reported", "approved", "completed", "declined".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#status DataCloudflareCloudforceOneRequest#status}
    */
    readonly status?: string;
}
export declare function dataCloudflareCloudforceOneRequestFilterToTerraform(struct?: DataCloudflareCloudforceOneRequestFilter | cdktf.IResolvable): any;
export declare function dataCloudflareCloudforceOneRequestFilterToHclTerraform(struct?: DataCloudflareCloudforceOneRequestFilter | cdktf.IResolvable): any;
export declare class DataCloudflareCloudforceOneRequestFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCloudforceOneRequestFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareCloudforceOneRequestFilter | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request cloudflare_cloudforce_one_request}
*/
export declare class DataCloudflareCloudforceOneRequest extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_cloudforce_one_request";
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequest to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request cloudflare_cloudforce_one_request} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCloudforceOneRequestConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get completed(): any;
    get content(): any;
    get created(): any;
    private _filter;
    get filter(): DataCloudflareCloudforceOneRequestFilterOutputReference;
    putFilter(value: DataCloudflareCloudforceOneRequestFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get messageTokens(): any;
    get priority(): any;
    get readableId(): any;
    get request(): any;
    private _requestId?;
    get requestId(): string;
    set requestId(value: string);
    resetRequestId(): void;
    get requestIdInput(): string;
    get status(): any;
    get summary(): any;
    get tlp(): any;
    get tokens(): any;
    get updated(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
