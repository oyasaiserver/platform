// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate infisical_cert_manager_certificate}
*/
export class CertManagerCertificate extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_cert_manager_certificate";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCertificate to import
    * @param importFromId The id of the existing CertManagerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCertificate to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_certificate", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate infisical_cert_manager_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCertificateConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_cert_manager_certificate',
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
        this._altNames = config.altNames;
        this._commonName = config.commonName;
        this._country = config.country;
        this._csr = config.csr;
        this._extendedKeyUsages = config.extendedKeyUsages;
        this._keyAlgorithm = config.keyAlgorithm;
        this._keyUsages = config.keyUsages;
        this._locality = config.locality;
        this._organization = config.organization;
        this._ou = config.ou;
        this._profileId = config.profileId;
        this._province = config.province;
        this._signatureAlgorithm = config.signatureAlgorithm;
        this._timeoutSeconds = config.timeoutSeconds;
        this._ttl = config.ttl;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // alt_names - computed: true, optional: true, required: false
    _altNames;
    get altNames() {
        return this.getListAttribute('alt_names');
    }
    set altNames(value) {
        this._altNames = value;
    }
    resetAltNames() {
        this._altNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get altNamesInput() {
        return this._altNames;
    }
    // certificate - computed: true, optional: false, required: false
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    // certificate_chain - computed: true, optional: false, required: false
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    // certificate_request_id - computed: true, optional: false, required: false
    get certificateRequestId() {
        return this.getStringAttribute('certificate_request_id');
    }
    // common_name - computed: true, optional: true, required: false
    _commonName;
    get commonName() {
        return this.getStringAttribute('common_name');
    }
    set commonName(value) {
        this._commonName = value;
    }
    resetCommonName() {
        this._commonName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commonNameInput() {
        return this._commonName;
    }
    // country - computed: false, optional: true, required: false
    _country;
    get country() {
        return this.getStringAttribute('country');
    }
    set country(value) {
        this._country = value;
    }
    resetCountry() {
        this._country = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get countryInput() {
        return this._country;
    }
    // csr - computed: false, optional: true, required: false
    _csr;
    get csr() {
        return this.getStringAttribute('csr');
    }
    set csr(value) {
        this._csr = value;
    }
    resetCsr() {
        this._csr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get csrInput() {
        return this._csr;
    }
    // extended_key_usages - computed: false, optional: true, required: false
    _extendedKeyUsages;
    get extendedKeyUsages() {
        return this.getListAttribute('extended_key_usages');
    }
    set extendedKeyUsages(value) {
        this._extendedKeyUsages = value;
    }
    resetExtendedKeyUsages() {
        this._extendedKeyUsages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extendedKeyUsagesInput() {
        return this._extendedKeyUsages;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // key_algorithm - computed: true, optional: true, required: false
    _keyAlgorithm;
    get keyAlgorithm() {
        return this.getStringAttribute('key_algorithm');
    }
    set keyAlgorithm(value) {
        this._keyAlgorithm = value;
    }
    resetKeyAlgorithm() {
        this._keyAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyAlgorithmInput() {
        return this._keyAlgorithm;
    }
    // key_usages - computed: false, optional: true, required: false
    _keyUsages;
    get keyUsages() {
        return this.getListAttribute('key_usages');
    }
    set keyUsages(value) {
        this._keyUsages = value;
    }
    resetKeyUsages() {
        this._keyUsages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyUsagesInput() {
        return this._keyUsages;
    }
    // locality - computed: false, optional: true, required: false
    _locality;
    get locality() {
        return this.getStringAttribute('locality');
    }
    set locality(value) {
        this._locality = value;
    }
    resetLocality() {
        this._locality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get localityInput() {
        return this._locality;
    }
    // not_after - computed: true, optional: false, required: false
    get notAfter() {
        return this.getStringAttribute('not_after');
    }
    // not_before - computed: true, optional: false, required: false
    get notBefore() {
        return this.getStringAttribute('not_before');
    }
    // organization - computed: false, optional: true, required: false
    _organization;
    get organization() {
        return this.getStringAttribute('organization');
    }
    set organization(value) {
        this._organization = value;
    }
    resetOrganization() {
        this._organization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get organizationInput() {
        return this._organization;
    }
    // ou - computed: false, optional: true, required: false
    _ou;
    get ou() {
        return this.getStringAttribute('ou');
    }
    set ou(value) {
        this._ou = value;
    }
    resetOu() {
        this._ou = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ouInput() {
        return this._ou;
    }
    // private_key - computed: true, optional: false, required: false
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    // profile_id - computed: false, optional: false, required: true
    _profileId;
    get profileId() {
        return this.getStringAttribute('profile_id');
    }
    set profileId(value) {
        this._profileId = value;
    }
    // Temporarily expose input value. Use with caution.
    get profileIdInput() {
        return this._profileId;
    }
    // province - computed: false, optional: true, required: false
    _province;
    get province() {
        return this.getStringAttribute('province');
    }
    set province(value) {
        this._province = value;
    }
    resetProvince() {
        this._province = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get provinceInput() {
        return this._province;
    }
    // serial_number - computed: true, optional: false, required: false
    get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
    // signature_algorithm - computed: true, optional: true, required: false
    _signatureAlgorithm;
    get signatureAlgorithm() {
        return this.getStringAttribute('signature_algorithm');
    }
    set signatureAlgorithm(value) {
        this._signatureAlgorithm = value;
    }
    resetSignatureAlgorithm() {
        this._signatureAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get signatureAlgorithmInput() {
        return this._signatureAlgorithm;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // timeout_seconds - computed: true, optional: true, required: false
    _timeoutSeconds;
    get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
    set timeoutSeconds(value) {
        this._timeoutSeconds = value;
    }
    resetTimeoutSeconds() {
        this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutSecondsInput() {
        return this._timeoutSeconds;
    }
    // ttl - computed: false, optional: true, required: false
    _ttl;
    get ttl() {
        return this.getStringAttribute('ttl');
    }
    set ttl(value) {
        this._ttl = value;
    }
    resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ttlInput() {
        return this._ttl;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._altNames),
            common_name: cdktf.stringToTerraform(this._commonName),
            country: cdktf.stringToTerraform(this._country),
            csr: cdktf.stringToTerraform(this._csr),
            extended_key_usages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extendedKeyUsages),
            key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
            key_usages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyUsages),
            locality: cdktf.stringToTerraform(this._locality),
            organization: cdktf.stringToTerraform(this._organization),
            ou: cdktf.stringToTerraform(this._ou),
            profile_id: cdktf.stringToTerraform(this._profileId),
            province: cdktf.stringToTerraform(this._province),
            signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
            timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
            ttl: cdktf.stringToTerraform(this._ttl),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            alt_names: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._altNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            common_name: {
                value: cdktf.stringToHclTerraform(this._commonName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            country: {
                value: cdktf.stringToHclTerraform(this._country),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            csr: {
                value: cdktf.stringToHclTerraform(this._csr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            extended_key_usages: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extendedKeyUsages),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            key_algorithm: {
                value: cdktf.stringToHclTerraform(this._keyAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_usages: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyUsages),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            locality: {
                value: cdktf.stringToHclTerraform(this._locality),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization: {
                value: cdktf.stringToHclTerraform(this._organization),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ou: {
                value: cdktf.stringToHclTerraform(this._ou),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_id: {
                value: cdktf.stringToHclTerraform(this._profileId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            province: {
                value: cdktf.stringToHclTerraform(this._province),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            signature_algorithm: {
                value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            timeout_seconds: {
                value: cdktf.numberToHclTerraform(this._timeoutSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ttl: {
                value: cdktf.stringToHclTerraform(this._ttl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
