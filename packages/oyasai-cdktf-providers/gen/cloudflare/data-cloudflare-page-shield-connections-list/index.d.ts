import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePageShieldConnectionsListConfig extends cdktf.TerraformMetaArguments {
    /**
    * The direction used to sort returned connections.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#direction DataCloudflarePageShieldConnectionsList#direction}
    */
    readonly direction?: string;
    /**
    * When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#exclude_cdn_cgi DataCloudflarePageShieldConnectionsList#exclude_cdn_cgi}
    */
    readonly excludeCdnCgi?: boolean | cdktf.IResolvable;
    /**
    * Excludes connections whose URL contains one of the URL-encoded URLs separated by commas.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#exclude_urls DataCloudflarePageShieldConnectionsList#exclude_urls}
    */
    readonly excludeUrls?: string;
    /**
    * Export the list of connections as a file, limited to 50000 entries.
    * Available values: "csv".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#export DataCloudflarePageShieldConnectionsList#export}
    */
    readonly export?: string;
    /**
    * Includes connections that match one or more URL-encoded hostnames separated by commas.
    *
    * Wildcards are supported at the start and end of each hostname to support starts with, ends with
    * and contains. If no wildcards are used, results will be filtered by exact match
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#hosts DataCloudflarePageShieldConnectionsList#hosts}
    */
    readonly hosts?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#max_items DataCloudflarePageShieldConnectionsList#max_items}
    */
    readonly maxItems?: number;
    /**
    * The field used to sort returned connections.
    * Available values: "first_seen_at", "last_seen_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#order_by DataCloudflarePageShieldConnectionsList#order_by}
    */
    readonly orderBy?: string;
    /**
    * The current page number of the paginated results.
    *
    * We additionally support a special value "all". When "all" is used, the API will return all the connections
    * with the applied filters in a single page. This feature is best-effort and it may only work for zones with
    * a low number of connections
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#page DataCloudflarePageShieldConnectionsList#page}
    */
    readonly page?: string;
    /**
    * Includes connections that match one or more page URLs (separated by commas) where they were last seen
    *
    * Wildcards are supported at the start and end of each page URL to support starts with, ends with
    * and contains. If no wildcards are used, results will be filtered by exact match
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#page_url DataCloudflarePageShieldConnectionsList#page_url}
    */
    readonly pageUrl?: string;
    /**
    * The number of results per page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#per_page DataCloudflarePageShieldConnectionsList#per_page}
    */
    readonly perPage?: number;
    /**
    * When true, malicious connections appear first in the returned connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#prioritize_malicious DataCloudflarePageShieldConnectionsList#prioritize_malicious}
    */
    readonly prioritizeMalicious?: boolean | cdktf.IResolvable;
    /**
    * Filters the returned connections using a comma-separated list of connection statuses. Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#status DataCloudflarePageShieldConnectionsList#status}
    */
    readonly status?: string;
    /**
    * Includes connections whose URL contain one or more URL-encoded URLs separated by commas.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#urls DataCloudflarePageShieldConnectionsList#urls}
    */
    readonly urls?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#zone_id DataCloudflarePageShieldConnectionsList#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflarePageShieldConnectionsListResult {
}
export declare function dataCloudflarePageShieldConnectionsListResultToTerraform(struct?: DataCloudflarePageShieldConnectionsListResult): any;
export declare function dataCloudflarePageShieldConnectionsListResultToHclTerraform(struct?: DataCloudflarePageShieldConnectionsListResult): any;
export declare class DataCloudflarePageShieldConnectionsListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePageShieldConnectionsListResult | undefined;
    set internalValue(value: DataCloudflarePageShieldConnectionsListResult | undefined);
    get addedAt(): any;
    get domainReportedMalicious(): any;
    get firstPageUrl(): any;
    get firstSeenAt(): any;
    get host(): any;
    get id(): any;
    get lastSeenAt(): any;
    get maliciousDomainCategories(): any;
    get maliciousUrlCategories(): any;
    get pageUrls(): any;
    get url(): any;
    get urlContainsCdnCgiPath(): any;
    get urlReportedMalicious(): any;
}
export declare class DataCloudflarePageShieldConnectionsListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePageShieldConnectionsListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list cloudflare_page_shield_connections_list}
*/
export declare class DataCloudflarePageShieldConnectionsList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_page_shield_connections_list";
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldConnectionsList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldConnectionsList to import
    * @param importFromId The id of the existing DataCloudflarePageShieldConnectionsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldConnectionsList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections_list cloudflare_page_shield_connections_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldConnectionsListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflarePageShieldConnectionsListConfig);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _excludeCdnCgi?;
    get excludeCdnCgi(): boolean | cdktf.IResolvable;
    set excludeCdnCgi(value: boolean | cdktf.IResolvable);
    resetExcludeCdnCgi(): void;
    get excludeCdnCgiInput(): any;
    private _excludeUrls?;
    get excludeUrls(): string;
    set excludeUrls(value: string);
    resetExcludeUrls(): void;
    get excludeUrlsInput(): string;
    private _export?;
    get export(): string;
    set export(value: string);
    resetExport(): void;
    get exportInput(): string;
    private _hosts?;
    get hosts(): string;
    set hosts(value: string);
    resetHosts(): void;
    get hostsInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _orderBy?;
    get orderBy(): string;
    set orderBy(value: string);
    resetOrderBy(): void;
    get orderByInput(): string;
    private _page?;
    get page(): string;
    set page(value: string);
    resetPage(): void;
    get pageInput(): string;
    private _pageUrl?;
    get pageUrl(): string;
    set pageUrl(value: string);
    resetPageUrl(): void;
    get pageUrlInput(): string;
    private _perPage?;
    get perPage(): number;
    set perPage(value: number);
    resetPerPage(): void;
    get perPageInput(): number;
    private _prioritizeMalicious?;
    get prioritizeMalicious(): boolean | cdktf.IResolvable;
    set prioritizeMalicious(value: boolean | cdktf.IResolvable);
    resetPrioritizeMalicious(): void;
    get prioritizeMaliciousInput(): any;
    private _result;
    get result(): DataCloudflarePageShieldConnectionsListResultList;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _urls?;
    get urls(): string;
    set urls(value: string);
    resetUrls(): void;
    get urlsInput(): string;
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
