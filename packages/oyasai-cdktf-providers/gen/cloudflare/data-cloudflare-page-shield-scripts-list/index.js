// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflarePageShieldScriptsListResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflarePageShieldScriptsListResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflarePageShieldScriptsListResultOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // added_at - computed: true, optional: false, required: false
    get addedAt() {
        return this.getStringAttribute('added_at');
    }
    // cryptomining_score - computed: true, optional: false, required: false
    get cryptominingScore() {
        return this.getNumberAttribute('cryptomining_score');
    }
    // dataflow_score - computed: true, optional: false, required: false
    get dataflowScore() {
        return this.getNumberAttribute('dataflow_score');
    }
    // domain_reported_malicious - computed: true, optional: false, required: false
    get domainReportedMalicious() {
        return this.getBooleanAttribute('domain_reported_malicious');
    }
    // fetched_at - computed: true, optional: false, required: false
    get fetchedAt() {
        return this.getStringAttribute('fetched_at');
    }
    // first_page_url - computed: true, optional: false, required: false
    get firstPageUrl() {
        return this.getStringAttribute('first_page_url');
    }
    // first_seen_at - computed: true, optional: false, required: false
    get firstSeenAt() {
        return this.getStringAttribute('first_seen_at');
    }
    // hash - computed: true, optional: false, required: false
    get hash() {
        return this.getStringAttribute('hash');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // js_integrity_score - computed: true, optional: false, required: false
    get jsIntegrityScore() {
        return this.getNumberAttribute('js_integrity_score');
    }
    // last_seen_at - computed: true, optional: false, required: false
    get lastSeenAt() {
        return this.getStringAttribute('last_seen_at');
    }
    // magecart_score - computed: true, optional: false, required: false
    get magecartScore() {
        return this.getNumberAttribute('magecart_score');
    }
    // malicious_domain_categories - computed: true, optional: false, required: false
    get maliciousDomainCategories() {
        return this.getListAttribute('malicious_domain_categories');
    }
    // malicious_url_categories - computed: true, optional: false, required: false
    get maliciousUrlCategories() {
        return this.getListAttribute('malicious_url_categories');
    }
    // malware_score - computed: true, optional: false, required: false
    get malwareScore() {
        return this.getNumberAttribute('malware_score');
    }
    // obfuscation_score - computed: true, optional: false, required: false
    get obfuscationScore() {
        return this.getNumberAttribute('obfuscation_score');
    }
    // page_urls - computed: true, optional: false, required: false
    get pageUrls() {
        return this.getListAttribute('page_urls');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // url_contains_cdn_cgi_path - computed: true, optional: false, required: false
    get urlContainsCdnCgiPath() {
        return this.getBooleanAttribute('url_contains_cdn_cgi_path');
    }
    // url_reported_malicious - computed: true, optional: false, required: false
    get urlReportedMalicious() {
        return this.getBooleanAttribute('url_reported_malicious');
    }
}
export class DataCloudflarePageShieldScriptsListResultList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataCloudflarePageShieldScriptsListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list cloudflare_page_shield_scripts_list}
*/
export class DataCloudflarePageShieldScriptsList extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_page_shield_scripts_list";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldScriptsList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldScriptsList to import
    * @param importFromId The id of the existing DataCloudflarePageShieldScriptsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldScriptsList to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_scripts_list", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts_list cloudflare_page_shield_scripts_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldScriptsListConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_page_shield_scripts_list',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._direction = config.direction;
        this._excludeCdnCgi = config.excludeCdnCgi;
        this._excludeDuplicates = config.excludeDuplicates;
        this._excludeUrls = config.excludeUrls;
        this._export = config.export;
        this._hosts = config.hosts;
        this._maxItems = config.maxItems;
        this._orderBy = config.orderBy;
        this._page = config.page;
        this._pageUrl = config.pageUrl;
        this._perPage = config.perPage;
        this._prioritizeMalicious = config.prioritizeMalicious;
        this._status = config.status;
        this._urls = config.urls;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // direction - computed: false, optional: true, required: false
    _direction;
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
    }
    // exclude_cdn_cgi - computed: true, optional: true, required: false
    _excludeCdnCgi;
    get excludeCdnCgi() {
        return this.getBooleanAttribute('exclude_cdn_cgi');
    }
    set excludeCdnCgi(value) {
        this._excludeCdnCgi = value;
    }
    resetExcludeCdnCgi() {
        this._excludeCdnCgi = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeCdnCgiInput() {
        return this._excludeCdnCgi;
    }
    // exclude_duplicates - computed: true, optional: true, required: false
    _excludeDuplicates;
    get excludeDuplicates() {
        return this.getBooleanAttribute('exclude_duplicates');
    }
    set excludeDuplicates(value) {
        this._excludeDuplicates = value;
    }
    resetExcludeDuplicates() {
        this._excludeDuplicates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeDuplicatesInput() {
        return this._excludeDuplicates;
    }
    // exclude_urls - computed: false, optional: true, required: false
    _excludeUrls;
    get excludeUrls() {
        return this.getStringAttribute('exclude_urls');
    }
    set excludeUrls(value) {
        this._excludeUrls = value;
    }
    resetExcludeUrls() {
        this._excludeUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeUrlsInput() {
        return this._excludeUrls;
    }
    // export - computed: false, optional: true, required: false
    _export;
    get export() {
        return this.getStringAttribute('export');
    }
    set export(value) {
        this._export = value;
    }
    resetExport() {
        this._export = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get exportInput() {
        return this._export;
    }
    // hosts - computed: false, optional: true, required: false
    _hosts;
    get hosts() {
        return this.getStringAttribute('hosts');
    }
    set hosts(value) {
        this._hosts = value;
    }
    resetHosts() {
        this._hosts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostsInput() {
        return this._hosts;
    }
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
    }
    // order_by - computed: false, optional: true, required: false
    _orderBy;
    get orderBy() {
        return this.getStringAttribute('order_by');
    }
    set orderBy(value) {
        this._orderBy = value;
    }
    resetOrderBy() {
        this._orderBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderByInput() {
        return this._orderBy;
    }
    // page - computed: false, optional: true, required: false
    _page;
    get page() {
        return this.getStringAttribute('page');
    }
    set page(value) {
        this._page = value;
    }
    resetPage() {
        this._page = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pageInput() {
        return this._page;
    }
    // page_url - computed: false, optional: true, required: false
    _pageUrl;
    get pageUrl() {
        return this.getStringAttribute('page_url');
    }
    set pageUrl(value) {
        this._pageUrl = value;
    }
    resetPageUrl() {
        this._pageUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pageUrlInput() {
        return this._pageUrl;
    }
    // per_page - computed: false, optional: true, required: false
    _perPage;
    get perPage() {
        return this.getNumberAttribute('per_page');
    }
    set perPage(value) {
        this._perPage = value;
    }
    resetPerPage() {
        this._perPage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get perPageInput() {
        return this._perPage;
    }
    // prioritize_malicious - computed: false, optional: true, required: false
    _prioritizeMalicious;
    get prioritizeMalicious() {
        return this.getBooleanAttribute('prioritize_malicious');
    }
    set prioritizeMalicious(value) {
        this._prioritizeMalicious = value;
    }
    resetPrioritizeMalicious() {
        this._prioritizeMalicious = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prioritizeMaliciousInput() {
        return this._prioritizeMalicious;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflarePageShieldScriptsListResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // status - computed: false, optional: true, required: false
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    // urls - computed: false, optional: true, required: false
    _urls;
    get urls() {
        return this.getStringAttribute('urls');
    }
    set urls(value) {
        this._urls = value;
    }
    resetUrls() {
        this._urls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get urlsInput() {
        return this._urls;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            direction: cdktf.stringToTerraform(this._direction),
            exclude_cdn_cgi: cdktf.booleanToTerraform(this._excludeCdnCgi),
            exclude_duplicates: cdktf.booleanToTerraform(this._excludeDuplicates),
            exclude_urls: cdktf.stringToTerraform(this._excludeUrls),
            export: cdktf.stringToTerraform(this._export),
            hosts: cdktf.stringToTerraform(this._hosts),
            max_items: cdktf.numberToTerraform(this._maxItems),
            order_by: cdktf.stringToTerraform(this._orderBy),
            page: cdktf.stringToTerraform(this._page),
            page_url: cdktf.stringToTerraform(this._pageUrl),
            per_page: cdktf.numberToTerraform(this._perPage),
            prioritize_malicious: cdktf.booleanToTerraform(this._prioritizeMalicious),
            status: cdktf.stringToTerraform(this._status),
            urls: cdktf.stringToTerraform(this._urls),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exclude_cdn_cgi: {
                value: cdktf.booleanToHclTerraform(this._excludeCdnCgi),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            exclude_duplicates: {
                value: cdktf.booleanToHclTerraform(this._excludeDuplicates),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            exclude_urls: {
                value: cdktf.stringToHclTerraform(this._excludeUrls),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            export: {
                value: cdktf.stringToHclTerraform(this._export),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hosts: {
                value: cdktf.stringToHclTerraform(this._hosts),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            order_by: {
                value: cdktf.stringToHclTerraform(this._orderBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            page: {
                value: cdktf.stringToHclTerraform(this._page),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            page_url: {
                value: cdktf.stringToHclTerraform(this._pageUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            per_page: {
                value: cdktf.numberToHclTerraform(this._perPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            prioritize_malicious: {
                value: cdktf.booleanToHclTerraform(this._prioritizeMalicious),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            urls: {
                value: cdktf.stringToHclTerraform(this._urls),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
