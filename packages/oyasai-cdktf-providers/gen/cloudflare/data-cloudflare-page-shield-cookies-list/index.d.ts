import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePageShieldCookiesListConfig extends cdktf.TerraformMetaArguments {
    /**
    * The direction used to sort returned cookies.'
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#direction DataCloudflarePageShieldCookiesList#direction}
    */
    readonly direction?: string;
    /**
    * Filters the returned cookies that match the specified domain attribute
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#domain DataCloudflarePageShieldCookiesList#domain}
    */
    readonly domain?: string;
    /**
    * Export the list of cookies as a file, limited to 50000 entries.
    * Available values: "csv".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#export DataCloudflarePageShieldCookiesList#export}
    */
    readonly export?: string;
    /**
    * Includes cookies that match one or more URL-encoded hostnames separated by commas.
    *
    * Wildcards are supported at the start and end of each hostname to support starts with, ends with
    * and contains. If no wildcards are used, results will be filtered by exact match
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#hosts DataCloudflarePageShieldCookiesList#hosts}
    */
    readonly hosts?: string;
    /**
    * Filters the returned cookies that are set with HttpOnly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#http_only DataCloudflarePageShieldCookiesList#http_only}
    */
    readonly httpOnly?: boolean | cdktf.IResolvable;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#max_items DataCloudflarePageShieldCookiesList#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filters the returned cookies that match the specified name.
    * Wildcards are supported at the start and end to support starts with, ends with
    * and contains. e.g. session*
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#name DataCloudflarePageShieldCookiesList#name}
    */
    readonly name?: string;
    /**
    * The field used to sort returned cookies.
    * Available values: "first_seen_at", "last_seen_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#order_by DataCloudflarePageShieldCookiesList#order_by}
    */
    readonly orderBy?: string;
    /**
    * The current page number of the paginated results.
    *
    * We additionally support a special value "all". When "all" is used, the API will return all the cookies
    * with the applied filters in a single page. This feature is best-effort and it may only work for zones with
    * a low number of cookies
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#page DataCloudflarePageShieldCookiesList#page}
    */
    readonly page?: string;
    /**
    * Includes connections that match one or more page URLs (separated by commas) where they were last seen
    *
    * Wildcards are supported at the start and end of each page URL to support starts with, ends with
    * and contains. If no wildcards are used, results will be filtered by exact match
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#page_url DataCloudflarePageShieldCookiesList#page_url}
    */
    readonly pageUrl?: string;
    /**
    * Filters the returned cookies that match the specified path attribute
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#path DataCloudflarePageShieldCookiesList#path}
    */
    readonly path?: string;
    /**
    * The number of results per page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#per_page DataCloudflarePageShieldCookiesList#per_page}
    */
    readonly perPage?: number;
    /**
    * Filters the returned cookies that match the specified same_site attribute
    * Available values: "lax", "strict", "none".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#same_site DataCloudflarePageShieldCookiesList#same_site}
    */
    readonly sameSite?: string;
    /**
    * Filters the returned cookies that are set with Secure
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#secure DataCloudflarePageShieldCookiesList#secure}
    */
    readonly secure?: boolean | cdktf.IResolvable;
    /**
    * Filters the returned cookies that match the specified type attribute
    * Available values: "first_party", "unknown".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#type DataCloudflarePageShieldCookiesList#type}
    */
    readonly type?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#zone_id DataCloudflarePageShieldCookiesList#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflarePageShieldCookiesListResult {
}
export declare function dataCloudflarePageShieldCookiesListResultToTerraform(struct?: DataCloudflarePageShieldCookiesListResult): any;
export declare function dataCloudflarePageShieldCookiesListResultToHclTerraform(struct?: DataCloudflarePageShieldCookiesListResult): any;
export declare class DataCloudflarePageShieldCookiesListResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePageShieldCookiesListResult | undefined;
    set internalValue(value: DataCloudflarePageShieldCookiesListResult | undefined);
    get domainAttribute(): any;
    get expiresAttribute(): any;
    get firstSeenAt(): any;
    get host(): any;
    get httpOnlyAttribute(): any;
    get id(): any;
    get lastSeenAt(): any;
    get maxAgeAttribute(): any;
    get name(): any;
    get pageUrls(): any;
    get pathAttribute(): any;
    get sameSiteAttribute(): any;
    get secureAttribute(): any;
    get type(): any;
}
export declare class DataCloudflarePageShieldCookiesListResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePageShieldCookiesListResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list}
*/
export declare class DataCloudflarePageShieldCookiesList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_page_shield_cookies_list";
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldCookiesList to import
    * @param importFromId The id of the existing DataCloudflarePageShieldCookiesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldCookiesList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldCookiesListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflarePageShieldCookiesListConfig);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string;
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
    private _httpOnly?;
    get httpOnly(): boolean | cdktf.IResolvable;
    set httpOnly(value: boolean | cdktf.IResolvable);
    resetHttpOnly(): void;
    get httpOnlyInput(): any;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
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
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _perPage?;
    get perPage(): number;
    set perPage(value: number);
    resetPerPage(): void;
    get perPageInput(): number;
    private _result;
    get result(): DataCloudflarePageShieldCookiesListResultList;
    private _sameSite?;
    get sameSite(): string;
    set sameSite(value: string);
    resetSameSite(): void;
    get sameSiteInput(): string;
    private _secure?;
    get secure(): boolean | cdktf.IResolvable;
    set secure(value: boolean | cdktf.IResolvable);
    resetSecure(): void;
    get secureInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
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
