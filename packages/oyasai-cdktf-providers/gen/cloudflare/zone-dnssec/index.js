// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dnssec
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dnssec cloudflare_zone_dnssec}
*/
export class ZoneDnssec extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zone_dnssec";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZoneDnssec resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneDnssec to import
    * @param importFromId The id of the existing ZoneDnssec that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dnssec#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneDnssec to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_dnssec", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dnssec cloudflare_zone_dnssec} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneDnssecConfig
    */
    constructor(scope, id, config) {
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
        this._dnssecMultiSigner = config.dnssecMultiSigner;
        this._dnssecPresigned = config.dnssecPresigned;
        this._dnssecUseNsec3 = config.dnssecUseNsec3;
        this._status = config.status;
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
    // dnssec_multi_signer - computed: false, optional: true, required: false
    _dnssecMultiSigner;
    get dnssecMultiSigner() {
        return this.getBooleanAttribute('dnssec_multi_signer');
    }
    set dnssecMultiSigner(value) {
        this._dnssecMultiSigner = value;
    }
    resetDnssecMultiSigner() {
        this._dnssecMultiSigner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnssecMultiSignerInput() {
        return this._dnssecMultiSigner;
    }
    // dnssec_presigned - computed: false, optional: true, required: false
    _dnssecPresigned;
    get dnssecPresigned() {
        return this.getBooleanAttribute('dnssec_presigned');
    }
    set dnssecPresigned(value) {
        this._dnssecPresigned = value;
    }
    resetDnssecPresigned() {
        this._dnssecPresigned = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnssecPresignedInput() {
        return this._dnssecPresigned;
    }
    // dnssec_use_nsec3 - computed: false, optional: true, required: false
    _dnssecUseNsec3;
    get dnssecUseNsec3() {
        return this.getBooleanAttribute('dnssec_use_nsec3');
    }
    set dnssecUseNsec3(value) {
        this._dnssecUseNsec3 = value;
    }
    resetDnssecUseNsec3() {
        this._dnssecUseNsec3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dnssecUseNsec3Input() {
        return this._dnssecUseNsec3;
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
    // zone_id - computed: false, optional: false, required: true
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
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
            dnssec_multi_signer: cdktf.booleanToTerraform(this._dnssecMultiSigner),
            dnssec_presigned: cdktf.booleanToTerraform(this._dnssecPresigned),
            dnssec_use_nsec3: cdktf.booleanToTerraform(this._dnssecUseNsec3),
            status: cdktf.stringToTerraform(this._status),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            dnssec_multi_signer: {
                value: cdktf.booleanToHclTerraform(this._dnssecMultiSigner),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dnssec_presigned: {
                value: cdktf.booleanToHclTerraform(this._dnssecPresigned),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dnssec_use_nsec3: {
                value: cdktf.booleanToHclTerraform(this._dnssecUseNsec3),
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
