import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePageShieldScriptsListConfig extends cdktf.TerraformMetaArguments {
    /**
    * The direction used to sort returned scripts.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#direction DataCloudflarePageShieldScriptsList#direction}
    */
    readonly direction?: string;
    /**
    * When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts. The default value is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#exclude_cdn_cgi DataCloudflarePageShieldScriptsList#exclude_cdn_cgi}
    */
    readonly excludeCdnCgi?: boolean | cdktf.IResolvable;
    /**
    * When true, excludes duplicate scripts. We consider a script duplicate of another if their javascript
    * content matches and they share the same url host and zone hostname. In such case, we return the most
    * recent script for the URL host and zone hostname combination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#exclude_duplicates DataCloudflarePageShieldScriptsList#exclude_duplicates}
    */
    readonly excludeDuplicates?: boolean | cdktf.IResolvable;
    /**
    * Excludes scripts whose URL contains one of the URL-encoded URLs separated by commas.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#exclude_urls DataCloudflarePageShieldScriptsList#exclude_urls}
    */
    readonly excludeUrls?: string;
    /**
    * Export the list of scripts as a file, limited to 50000 entries.
    * Available values: "csv".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#export DataCloudflarePageShieldScriptsList#export}
    */
    readonly export?: string;
    /**
    * Includes scripts that match one or more URL-encoded hostnames separated by commas.
    *
    * Wildcards are supported at the start and end of each hostname to support starts with, ends with
    * and contains. If no wildcards are used, results will be filtered by exact match
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#hosts DataCloudflarePageShieldScriptsList#hosts}
    */
    readonly hosts?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#max_items DataCloudflarePageShieldScriptsList#max_items}
    */
    readonly maxItems?: number;
    /**
    * The field used to sort returned scripts.
    * Available values: "first_seen_at", "last_seen_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#order_by DataCloudflarePageShieldScriptsList#order_by}
    */
    readonly orderBy?: string;
    /**
    * The current page number of the paginated results.
    *
    * We additionally support a special value "all". When "all" is used, the API will return all the scripts
    * with the applied filters in a single page. This feature is best-effort and it may only work for zones with
    * a low number of scripts
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#page DataCloudflarePageShieldScriptsList#page}
    */
    readonly page?: string;
    /**
    * Includes scripts that match one or more page URLs (separated by commas) where they were last seen
    *
    * Wildcards are supported at the start and end of each page URL to support starts with, ends with
    * and contains. If no wildcards are used, results will be filtered by exact match
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#page_url DataCloudflarePageShieldScriptsList#page_url}
    */
    readonly pageUrl?: string;
    /**
    * The number of results per page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#per_page DataCloudflarePageShieldScriptsList#per_page}
    */
    readonly perPage?: number;
    /**
    * When true, malicious scripts appear first in the returned scripts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#prioritize_malicious DataCloudflarePageShieldScriptsList#prioritize_malicious}
    */
    readonly prioritizeMalicious?: boolean | cdktf.IResolvable;
    /**
    * Filters the returned scripts using a comma-separated list of scripts statuses. Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#status DataCloudflarePageShieldScriptsList#status}
    */
    readonly status?: string;
    /**
    * Includes scripts whose URL contain one or more URL-encoded URLs separated by commas.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#urls DataCloudflarePageShieldScriptsList#urls}
    */
    readonly urls?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#zone_id DataCloudflarePageShieldScriptsList#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflarePageShieldScriptsListResult {
}
export declare function dataCloudflarePageShieldScriptsListResultToTerraform(struct?: DataCloudflarePageShieldScriptsListResult): any;
export declare function dataCloudflarePageShieldScriptsListResultToHclTerraform(struct?: DataCloudflarePageShieldScriptsListResult): any;
export declare class DataCloudflarePageShieldScriptsListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePageShieldScriptsListResult | undefined;
    set internalValue(value: DataCloudflarePageShieldScriptsListResult | undefined);
    get addedAt(): any;
    get cryptominingScore(): any;
    get dataflowScore(): any;
    get domainReportedMalicious(): any;
    get fetchedAt(): any;
    get firstPageUrl(): any;
    get firstSeenAt(): any;
    get hash(): any;
    get host(): any;
    get id(): any;
    get jsIntegrityScore(): any;
    get lastSeenAt(): any;
    get magecartScore(): any;
    get maliciousDomainCategories(): any;
    get maliciousUrlCategories(): any;
    get malwareScore(): any;
    get obfuscationScore(): any;
    get pageUrls(): any;
    get url(): any;
    get urlContainsCdnCgiPath(): any;
    get urlReportedMalicious(): any;
}
export declare class DataCloudflarePageShieldScriptsListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePageShieldScriptsListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list cloudflare_page_shield_scripts_list}
*/
export declare class DataCloudflarePageShieldScriptsList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_page_shield_scripts_list";
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldScriptsList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldScriptsList to import
    * @param importFromId The id of the existing DataCloudflarePageShieldScriptsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldScriptsList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list cloudflare_page_shield_scripts_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldScriptsListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflarePageShieldScriptsListConfig);
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
    private _excludeDuplicates?;
    get excludeDuplicates(): boolean | cdktf.IResolvable;
    set excludeDuplicates(value: boolean | cdktf.IResolvable);
    resetExcludeDuplicates(): void;
    get excludeDuplicatesInput(): any;
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
    get result(): DataCloudflarePageShieldScriptsListResultList;
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
