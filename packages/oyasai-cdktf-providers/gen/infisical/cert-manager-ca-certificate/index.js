// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate infisical_cert_manager_ca_certificate}
*/
export class CertManagerCaCertificate extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_cert_manager_ca_certificate";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerCaCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCaCertificate to import
    * @param importFromId The id of the existing CertManagerCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCaCertificate to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_ca_certificate", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate infisical_cert_manager_ca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCaCertificateConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_cert_manager_ca_certificate',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._caId = config.caId;
        this._maxPathLength = config.maxPathLength;
        this._notAfter = config.notAfter;
        this._notBefore = config.notBefore;
        this._parentCaId = config.parentCaId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // ca_id - computed: false, optional: false, required: true
    _caId;
    get caId() {
        return this.getStringAttribute('ca_id');
    }
    set caId(value) {
        this._caId = value;
    }
    // Temporarily expose input value. Use with caution.
    get caIdInput() {
        return this._caId;
    }
    // certificate - computed: true, optional: false, required: false
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    // certificate_chain - computed: true, optional: false, required: false
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // max_path_length - computed: true, optional: true, required: false
    _maxPathLength;
    get maxPathLength() {
        return this.getNumberAttribute('max_path_length');
    }
    set maxPathLength(value) {
        this._maxPathLength = value;
    }
    resetMaxPathLength() {
        this._maxPathLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxPathLengthInput() {
        return this._maxPathLength;
    }
    // not_after - computed: false, optional: false, required: true
    _notAfter;
    get notAfter() {
        return this.getStringAttribute('not_after');
    }
    set notAfter(value) {
        this._notAfter = value;
    }
    // Temporarily expose input value. Use with caution.
    get notAfterInput() {
        return this._notAfter;
    }
    // not_before - computed: false, optional: false, required: true
    _notBefore;
    get notBefore() {
        return this.getStringAttribute('not_before');
    }
    set notBefore(value) {
        this._notBefore = value;
    }
    // Temporarily expose input value. Use with caution.
    get notBeforeInput() {
        return this._notBefore;
    }
    // parent_ca_id - computed: false, optional: true, required: false
    _parentCaId;
    get parentCaId() {
        return this.getStringAttribute('parent_ca_id');
    }
    set parentCaId(value) {
        this._parentCaId = value;
    }
    resetParentCaId() {
        this._parentCaId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parentCaIdInput() {
        return this._parentCaId;
    }
    // serial_number - computed: true, optional: false, required: false
    get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            ca_id: cdktf.stringToTerraform(this._caId),
            max_path_length: cdktf.numberToTerraform(this._maxPathLength),
            not_after: cdktf.stringToTerraform(this._notAfter),
            not_before: cdktf.stringToTerraform(this._notBefore),
            parent_ca_id: cdktf.stringToTerraform(this._parentCaId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            ca_id: {
                value: cdktf.stringToHclTerraform(this._caId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_path_length: {
                value: cdktf.numberToHclTerraform(this._maxPathLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            not_after: {
                value: cdktf.stringToHclTerraform(this._notAfter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            not_before: {
                value: cdktf.stringToHclTerraform(this._notBefore),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent_ca_id: {
                value: cdktf.stringToHclTerraform(this._parentCaId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
