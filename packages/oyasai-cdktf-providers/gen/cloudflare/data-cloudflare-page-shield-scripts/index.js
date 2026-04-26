// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflarePageShieldScriptsVersionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflarePageShieldScriptsVersionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflarePageShieldScriptsVersionsOutputReference extends cdktf.ComplexObject {
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
    // cryptomining_score - computed: true, optional: false, required: false
    get cryptominingScore() {
        return this.getNumberAttribute('cryptomining_score');
    }
    // dataflow_score - computed: true, optional: false, required: false
    get dataflowScore() {
        return this.getNumberAttribute('dataflow_score');
    }
    // fetched_at - computed: true, optional: false, required: false
    get fetchedAt() {
        return this.getStringAttribute('fetched_at');
    }
    // hash - computed: true, optional: false, required: false
    get hash() {
        return this.getStringAttribute('hash');
    }
    // js_integrity_score - computed: true, optional: false, required: false
    get jsIntegrityScore() {
        return this.getNumberAttribute('js_integrity_score');
    }
    // magecart_score - computed: true, optional: false, required: false
    get magecartScore() {
        return this.getNumberAttribute('magecart_score');
    }
    // malware_score - computed: true, optional: false, required: false
    get malwareScore() {
        return this.getNumberAttribute('malware_score');
    }
    // obfuscation_score - computed: true, optional: false, required: false
    get obfuscationScore() {
        return this.getNumberAttribute('obfuscation_score');
    }
}
export class DataCloudflarePageShieldScriptsVersionsList extends cdktf.ComplexList {
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
        return new DataCloudflarePageShieldScriptsVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts}
*/
export class DataCloudflarePageShieldScripts extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_page_shield_scripts";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldScripts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldScripts to import
    * @param importFromId The id of the existing DataCloudflarePageShieldScripts that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldScripts to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_scripts", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldScriptsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_page_shield_scripts',
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
        this._scriptId = config.scriptId;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // script_id - computed: false, optional: false, required: true
    _scriptId;
    get scriptId() {
        return this.getStringAttribute('script_id');
    }
    set scriptId(value) {
        this._scriptId = value;
    }
    // Temporarily expose input value. Use with caution.
    get scriptIdInput() {
        return this._scriptId;
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
    // versions - computed: true, optional: false, required: false
    _versions = new DataCloudflarePageShieldScriptsVersionsList(this, "versions", false);
    get versions() {
        return this._versions;
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
            script_id: cdktf.stringToTerraform(this._scriptId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            script_id: {
                value: cdktf.stringToHclTerraform(this._scriptId),
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
