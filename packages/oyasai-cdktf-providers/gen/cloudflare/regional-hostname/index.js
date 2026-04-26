// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname cloudflare_regional_hostname}
*/
export class RegionalHostname extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_regional_hostname";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RegionalHostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RegionalHostname to import
    * @param importFromId The id of the existing RegionalHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RegionalHostname to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_regional_hostname", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname cloudflare_regional_hostname} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RegionalHostnameConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_regional_hostname',
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
        this._hostname = config.hostname;
        this._regionKey = config.regionKey;
        this._routing = config.routing;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // hostname - computed: false, optional: false, required: true
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // region_key - computed: false, optional: false, required: true
    _regionKey;
    get regionKey() {
        return this.getStringAttribute('region_key');
    }
    set regionKey(value) {
        this._regionKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get regionKeyInput() {
        return this._regionKey;
    }
    // routing - computed: true, optional: true, required: false
    _routing;
    get routing() {
        return this.getStringAttribute('routing');
    }
    set routing(value) {
        this._routing = value;
    }
    resetRouting() {
        this._routing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routingInput() {
        return this._routing;
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
            hostname: cdktf.stringToTerraform(this._hostname),
            region_key: cdktf.stringToTerraform(this._regionKey),
            routing: cdktf.stringToTerraform(this._routing),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            region_key: {
                value: cdktf.stringToHclTerraform(this._regionKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            routing: {
                value: cdktf.stringToHclTerraform(this._routing),
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
