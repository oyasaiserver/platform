// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}
*/
export class CertificateAuthoritiesHostnameAssociations extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_certificate_authorities_hostname_associations";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertificateAuthoritiesHostnameAssociations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertificateAuthoritiesHostnameAssociations to import
    * @param importFromId The id of the existing CertificateAuthoritiesHostnameAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertificateAuthoritiesHostnameAssociations to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_certificate_authorities_hostname_associations", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertificateAuthoritiesHostnameAssociationsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_certificate_authorities_hostname_associations',
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
        this._hostnames = config.hostnames;
        this._mtlsCertificateId = config.mtlsCertificateId;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // hostnames - computed: false, optional: true, required: false
    _hostnames;
    get hostnames() {
        return this.getListAttribute('hostnames');
    }
    set hostnames(value) {
        this._hostnames = value;
    }
    resetHostnames() {
        this._hostnames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnamesInput() {
        return this._hostnames;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // mtls_certificate_id - computed: false, optional: true, required: false
    _mtlsCertificateId;
    get mtlsCertificateId() {
        return this.getStringAttribute('mtls_certificate_id');
    }
    set mtlsCertificateId(value) {
        this._mtlsCertificateId = value;
    }
    resetMtlsCertificateId() {
        this._mtlsCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mtlsCertificateIdInput() {
        return this._mtlsCertificateId;
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
            hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnames),
            mtls_certificate_id: cdktf.stringToTerraform(this._mtlsCertificateId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            hostnames: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            mtls_certificate_id: {
                value: cdktf.stringToHclTerraform(this._mtlsCertificateId),
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
