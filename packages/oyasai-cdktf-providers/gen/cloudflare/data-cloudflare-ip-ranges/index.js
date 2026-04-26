// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges cloudflare_ip_ranges}
*/
export class DataCloudflareIpRanges extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_ip_ranges";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareIpRanges resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareIpRanges to import
    * @param importFromId The id of the existing DataCloudflareIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareIpRanges to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ip_ranges", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ip_ranges cloudflare_ip_ranges} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareIpRangesConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_ip_ranges',
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
        this._networks = config.networks;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // ipv4_cidrs - computed: true, optional: false, required: false
    get ipv4Cidrs() {
        return this.getListAttribute('ipv4_cidrs');
    }
    // ipv6_cidrs - computed: true, optional: false, required: false
    get ipv6Cidrs() {
        return this.getListAttribute('ipv6_cidrs');
    }
    // jdcloud_cidrs - computed: true, optional: false, required: false
    get jdcloudCidrs() {
        return this.getListAttribute('jdcloud_cidrs');
    }
    // networks - computed: false, optional: true, required: false
    _networks;
    get networks() {
        return this.getStringAttribute('networks');
    }
    set networks(value) {
        this._networks = value;
    }
    resetNetworks() {
        this._networks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networksInput() {
        return this._networks;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            networks: cdktf.stringToTerraform(this._networks),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            networks: {
                value: cdktf.stringToHclTerraform(this._networks),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
