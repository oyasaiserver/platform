// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec cloudflare_zone_dnssec}
*/
export class DataCloudflareZoneDnssec extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zone_dnssec";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneDnssec resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneDnssec to import
    * @param importFromId The id of the existing DataCloudflareZoneDnssec that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneDnssec to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_dnssec", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_dnssec cloudflare_zone_dnssec} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneDnssecConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zone_dnssec',
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
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // algorithm - computed: true, optional: false, required: false
    get algorithm() {
        return this.getStringAttribute('algorithm');
    }
    // digest - computed: true, optional: false, required: false
    get digest() {
        return this.getStringAttribute('digest');
    }
    // digest_algorithm - computed: true, optional: false, required: false
    get digestAlgorithm() {
        return this.getStringAttribute('digest_algorithm');
    }
    // digest_type - computed: true, optional: false, required: false
    get digestType() {
        return this.getStringAttribute('digest_type');
    }
    // dnssec_multi_signer - computed: true, optional: false, required: false
    get dnssecMultiSigner() {
        return this.getBooleanAttribute('dnssec_multi_signer');
    }
    // dnssec_presigned - computed: true, optional: false, required: false
    get dnssecPresigned() {
        return this.getBooleanAttribute('dnssec_presigned');
    }
    // dnssec_use_nsec3 - computed: true, optional: false, required: false
    get dnssecUseNsec3() {
        return this.getBooleanAttribute('dnssec_use_nsec3');
    }
    // ds - computed: true, optional: false, required: false
    get ds() {
        return this.getStringAttribute('ds');
    }
    // flags - computed: true, optional: false, required: false
    get flags() {
        return this.getNumberAttribute('flags');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // key_tag - computed: true, optional: false, required: false
    get keyTag() {
        return this.getNumberAttribute('key_tag');
    }
    // key_type - computed: true, optional: false, required: false
    get keyType() {
        return this.getStringAttribute('key_type');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // public_key - computed: true, optional: false, required: false
    get publicKey() {
        return this.getStringAttribute('public_key');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
