// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflarePageShieldCookiesListResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflarePageShieldCookiesListResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflarePageShieldCookiesListResultOutputReference extends cdktf.ComplexObject {
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
    // domain_attribute - computed: true, optional: false, required: false
    get domainAttribute() {
        return this.getStringAttribute('domain_attribute');
    }
    // expires_attribute - computed: true, optional: false, required: false
    get expiresAttribute() {
        return this.getStringAttribute('expires_attribute');
    }
    // first_seen_at - computed: true, optional: false, required: false
    get firstSeenAt() {
        return this.getStringAttribute('first_seen_at');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // http_only_attribute - computed: true, optional: false, required: false
    get httpOnlyAttribute() {
        return this.getBooleanAttribute('http_only_attribute');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_seen_at - computed: true, optional: false, required: false
    get lastSeenAt() {
        return this.getStringAttribute('last_seen_at');
    }
    // max_age_attribute - computed: true, optional: false, required: false
    get maxAgeAttribute() {
        return this.getNumberAttribute('max_age_attribute');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // page_urls - computed: true, optional: false, required: false
    get pageUrls() {
        return this.getListAttribute('page_urls');
    }
    // path_attribute - computed: true, optional: false, required: false
    get pathAttribute() {
        return this.getStringAttribute('path_attribute');
    }
    // same_site_attribute - computed: true, optional: false, required: false
    get sameSiteAttribute() {
        return this.getStringAttribute('same_site_attribute');
    }
    // secure_attribute - computed: true, optional: false, required: false
    get secureAttribute() {
        return this.getBooleanAttribute('secure_attribute');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export class DataCloudflarePageShieldCookiesListResultList extends cdktf.ComplexList {
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
        return new DataCloudflarePageShieldCookiesListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list}
*/
export class DataCloudflarePageShieldCookiesList extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_page_shield_cookies_list";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldCookiesList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldCookiesList to import
    * @param importFromId The id of the existing DataCloudflarePageShieldCookiesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldCookiesList to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_cookies_list", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies_list cloudflare_page_shield_cookies_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldCookiesListConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_page_shield_cookies_list',
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
        this._domain = config.domain;
        this._export = config.export;
        this._hosts = config.hosts;
        this._httpOnly = config.httpOnly;
        this._maxItems = config.maxItems;
        this._name = config.name;
        this._orderBy = config.orderBy;
        this._page = config.page;
        this._pageUrl = config.pageUrl;
        this._path = config.path;
        this._perPage = config.perPage;
        this._sameSite = config.sameSite;
        this._secure = config.secure;
        this._type = config.type;
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
    // domain - computed: false, optional: true, required: false
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
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
    // http_only - computed: false, optional: true, required: false
    _httpOnly;
    get httpOnly() {
        return this.getBooleanAttribute('http_only');
    }
    set httpOnly(value) {
        this._httpOnly = value;
    }
    resetHttpOnly() {
        this._httpOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpOnlyInput() {
        return this._httpOnly;
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
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
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
    // path - computed: false, optional: true, required: false
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
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
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflarePageShieldCookiesListResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // same_site - computed: false, optional: true, required: false
    _sameSite;
    get sameSite() {
        return this.getStringAttribute('same_site');
    }
    set sameSite(value) {
        this._sameSite = value;
    }
    resetSameSite() {
        this._sameSite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sameSiteInput() {
        return this._sameSite;
    }
    // secure - computed: false, optional: true, required: false
    _secure;
    get secure() {
        return this.getBooleanAttribute('secure');
    }
    set secure(value) {
        this._secure = value;
    }
    resetSecure() {
        this._secure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secureInput() {
        return this._secure;
    }
    // type - computed: false, optional: true, required: false
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
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
            domain: cdktf.stringToTerraform(this._domain),
            export: cdktf.stringToTerraform(this._export),
            hosts: cdktf.stringToTerraform(this._hosts),
            http_only: cdktf.booleanToTerraform(this._httpOnly),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
            order_by: cdktf.stringToTerraform(this._orderBy),
            page: cdktf.stringToTerraform(this._page),
            page_url: cdktf.stringToTerraform(this._pageUrl),
            path: cdktf.stringToTerraform(this._path),
            per_page: cdktf.numberToTerraform(this._perPage),
            same_site: cdktf.stringToTerraform(this._sameSite),
            secure: cdktf.booleanToTerraform(this._secure),
            type: cdktf.stringToTerraform(this._type),
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
            domain: {
                value: cdktf.stringToHclTerraform(this._domain),
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
            http_only: {
                value: cdktf.booleanToHclTerraform(this._httpOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            path: {
                value: cdktf.stringToHclTerraform(this._path),
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
            same_site: {
                value: cdktf.stringToHclTerraform(this._sameSite),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secure: {
                value: cdktf.booleanToHclTerraform(this._secure),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
