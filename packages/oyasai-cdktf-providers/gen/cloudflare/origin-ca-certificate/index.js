// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate cloudflare_origin_ca_certificate}
*/
export class OriginCaCertificate extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_origin_ca_certificate";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OriginCaCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OriginCaCertificate to import
    * @param importFromId The id of the existing OriginCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OriginCaCertificate to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_origin_ca_certificate", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate cloudflare_origin_ca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OriginCaCertificateConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_origin_ca_certificate',
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
        this._csr = config.csr;
        this._hostnames = config.hostnames;
        this._requestType = config.requestType;
        this._requestedValidity = config.requestedValidity;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // certificate - computed: true, optional: false, required: false
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    // csr - computed: false, optional: false, required: true
    _csr;
    get csr() {
        return this.getStringAttribute('csr');
    }
    set csr(value) {
        this._csr = value;
    }
    // Temporarily expose input value. Use with caution.
    get csrInput() {
        return this._csr;
    }
    // expires_on - computed: true, optional: false, required: false
    get expiresOn() {
        return this.getStringAttribute('expires_on');
    }
    // hostnames - computed: false, optional: false, required: true
    _hostnames;
    get hostnames() {
        return this.getListAttribute('hostnames');
    }
    set hostnames(value) {
        this._hostnames = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostnamesInput() {
        return this._hostnames;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // request_type - computed: false, optional: false, required: true
    _requestType;
    get requestType() {
        return this.getStringAttribute('request_type');
    }
    set requestType(value) {
        this._requestType = value;
    }
    // Temporarily expose input value. Use with caution.
    get requestTypeInput() {
        return this._requestType;
    }
    // requested_validity - computed: true, optional: true, required: false
    _requestedValidity;
    get requestedValidity() {
        return this.getNumberAttribute('requested_validity');
    }
    set requestedValidity(value) {
        this._requestedValidity = value;
    }
    resetRequestedValidity() {
        this._requestedValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestedValidityInput() {
        return this._requestedValidity;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            csr: cdktf.stringToTerraform(this._csr),
            hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnames),
            request_type: cdktf.stringToTerraform(this._requestType),
            requested_validity: cdktf.numberToTerraform(this._requestedValidity),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            csr: {
                value: cdktf.stringToHclTerraform(this._csr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostnames: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            request_type: {
                value: cdktf.stringToHclTerraform(this._requestType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            requested_validity: {
                value: cdktf.numberToHclTerraform(this._requestedValidity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
