// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies cloudflare_page_shield_cookies}
*/
export class DataCloudflarePageShieldCookies extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_page_shield_cookies";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldCookies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldCookies to import
    * @param importFromId The id of the existing DataCloudflarePageShieldCookies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldCookies to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_cookies", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_cookies cloudflare_page_shield_cookies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldCookiesConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_page_shield_cookies',
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
        this._cookieId = config.cookieId;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // cookie_id - computed: false, optional: false, required: true
    _cookieId;
    get cookieId() {
        return this.getStringAttribute('cookie_id');
    }
    set cookieId(value) {
        this._cookieId = value;
    }
    // Temporarily expose input value. Use with caution.
    get cookieIdInput() {
        return this._cookieId;
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
            cookie_id: cdktf.stringToTerraform(this._cookieId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            cookie_id: {
                value: cdktf.stringToHclTerraform(this._cookieId),
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
