// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections cloudflare_page_shield_connections}
*/
export class DataCloudflarePageShieldConnections extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_page_shield_connections";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldConnections resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldConnections to import
    * @param importFromId The id of the existing DataCloudflarePageShieldConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldConnections to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_connections", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections cloudflare_page_shield_connections} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldConnectionsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_page_shield_connections',
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
        this._connectionId = config.connectionId;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // added_at - computed: true, optional: false, required: false
    get addedAt() {
        return this.getStringAttribute('added_at');
    }
    // connection_id - computed: false, optional: false, required: true
    _connectionId;
    get connectionId() {
        return this.getStringAttribute('connection_id');
    }
    set connectionId(value) {
        this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    get connectionIdInput() {
        return this._connectionId;
    }
    // domain_reported_malicious - computed: true, optional: false, required: false
    get domainReportedMalicious() {
        return this.getBooleanAttribute('domain_reported_malicious');
    }
    // first_page_url - computed: true, optional: false, required: false
    get firstPageUrl() {
        return this.getStringAttribute('first_page_url');
    }
    // first_seen_at - computed: true, optional: false, required: false
    get firstSeenAt() {
        return this.getStringAttribute('first_seen_at');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_seen_at - computed: true, optional: false, required: false
    get lastSeenAt() {
        return this.getStringAttribute('last_seen_at');
    }
    // malicious_domain_categories - computed: true, optional: false, required: false
    get maliciousDomainCategories() {
        return this.getListAttribute('malicious_domain_categories');
    }
    // malicious_url_categories - computed: true, optional: false, required: false
    get maliciousUrlCategories() {
        return this.getListAttribute('malicious_url_categories');
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
            connection_id: cdktf.stringToTerraform(this._connectionId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            connection_id: {
                value: cdktf.stringToHclTerraform(this._connectionId),
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
