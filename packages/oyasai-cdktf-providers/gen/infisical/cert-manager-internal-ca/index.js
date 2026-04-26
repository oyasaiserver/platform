// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca infisical_cert_manager_internal_ca}
*/
export class CertManagerInternalCa extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_cert_manager_internal_ca";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerInternalCa resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerInternalCa to import
    * @param importFromId The id of the existing CertManagerInternalCa that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerInternalCa to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_internal_ca", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca infisical_cert_manager_internal_ca} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerInternalCaConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_cert_manager_internal_ca',
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
        this._commonName = config.commonName;
        this._country = config.country;
        this._keyAlgorithm = config.keyAlgorithm;
        this._locality = config.locality;
        this._name = config.name;
        this._organization = config.organization;
        this._ou = config.ou;
        this._projectSlug = config.projectSlug;
        this._province = config.province;
        this._status = config.status;
        this._type = config.type;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // common_name - computed: false, optional: true, required: false
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
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
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
    // project_slug - computed: false, optional: false, required: true
    _projectSlug;
    get projectSlug() {
        return this.getStringAttribute('project_slug');
    }
    set projectSlug(value) {
        this._projectSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectSlugInput() {
        return this._projectSlug;
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
    // status - computed: true, optional: true, required: false
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
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            common_name: cdktf.stringToTerraform(this._commonName),
            country: cdktf.stringToTerraform(this._country),
            key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
            locality: cdktf.stringToTerraform(this._locality),
            name: cdktf.stringToTerraform(this._name),
            organization: cdktf.stringToTerraform(this._organization),
            ou: cdktf.stringToTerraform(this._ou),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            province: cdktf.stringToTerraform(this._province),
            status: cdktf.stringToTerraform(this._status),
            type: cdktf.stringToTerraform(this._type),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
            key_algorithm: {
                value: cdktf.stringToHclTerraform(this._keyAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            locality: {
                value: cdktf.stringToHclTerraform(this._locality),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
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
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
